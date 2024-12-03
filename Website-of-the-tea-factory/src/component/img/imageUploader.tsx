import React, { useCallback, useState } from 'react';
/*import FileUploader, { FileUploaderTypes } from 'devextreme-react/file-uploader';
import ProgressBar from 'devextreme-react/progress-bar';*/

/*const allowedFileExtensions = ['.jpg', '.jpeg', '.gif', '.png'];*/
interface Props {
    getImage:Function,
    image:string
}

function ImageUploader(props:Props){




    /*const [isDropZoneActive, setIsDropZoneActive] = useState(false);
    const [imageSource, setImageSource] = useState<string>('');
    const [textVisible, setTextVisible] = useState(true);
    const [progressVisible, setProgressVisible] = useState(false);
    const [progressValue, setProgressValue] = useState(0);

    const onDropZoneEnter = useCallback((e: FileUploaderTypes.DropZoneEnterEvent) => {
        if (e.dropZoneElement.id === 'dropzone-external') {
            setIsDropZoneActive(true);
        }
    }, [setIsDropZoneActive]);

    const onDropZoneLeave = useCallback((e: FileUploaderTypes.DropZoneLeaveEvent) => {
        if (e.dropZoneElement.id === 'dropzone-external') {
            setIsDropZoneActive(false);
        }
    }, [setIsDropZoneActive]);

    const onUploaded = useCallback((e: FileUploaderTypes.UploadedEvent) => {
        const { file } = e;
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setIsDropZoneActive(false);
            setImageSource(fileReader.result as string);
            console.log('Image Source:', fileReader.result);
        };
        fileReader.readAsDataURL(file);
        setTextVisible(false);
        setProgressVisible(false);
        setProgressValue(0);
    }, [setImageSource, setIsDropZoneActive, setTextVisible, setProgressVisible, setProgressValue]);

    const onProgress = useCallback((e: { bytesLoaded: number; bytesTotal: number; }) => {
        setProgressValue((e.bytesLoaded / e.bytesTotal) * 100);
    }, [setProgressValue]);

    const onUploadStarted = useCallback(() => {
        setImageSource('');
        setProgressVisible(true);
    }, [setImageSource, setProgressVisible]);

    return (
        <div className="widget-container flex-box absolute top-3 left-[25%]">
            {/!*<span>Profile Picture</span>*!/}
            <div id="dropzone-external" className={`flex-box ${isDropZoneActive ? 'dx-theme-accent-as-border-color dropzone-active' : 'dx-theme-border-color border-green-500'}`}>
                {imageSource && <img id="dropzone-image" src={imageSource} alt="" />}
                {textVisible && (
                    <div id="dropzone-text" className="flex-box text-[20px] font-bold">
                        <span>Drag & Drop the desired file</span>
                        <span>…or click to browse for a file instead.</span>
                    </div>
                )}
                <ProgressBar
                    id="upload-progress"
                    min={0}
                    max={100}
                    width="30%"
                    showStatus={false}
                    visible={progressVisible}
                    value={progressValue}
                ></ProgressBar>
            </div>
            <FileUploader
                id="file-uploader"
                className="hidden"
                dialogTrigger="#dropzone-external"
                dropZone="#dropzone-external"
                multiple={false}
                allowedFileExtensions={allowedFileExtensions}
                uploadMode="instantly"
                uploadUrl="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
                visible={false}
                onDropZoneEnter={onDropZoneEnter}
                onDropZoneLeave={onDropZoneLeave}
                onUploaded={onUploaded}
                onProgress={onProgress}
                onUploadStarted={onUploadStarted}
            ></FileUploader>
        </div>
    );*/
    const [selectedImage, setSelectedImage] = useState<string | null>(props.image);

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        const file = e.dataTransfer.files[0];

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = () => {
                setSelectedImage(reader.result as string);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = () => {
                setSelectedImage(reader.result as string);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setSelectedImage(null);
    };

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="border-2 border-dashed border-gray-300 rounded p-4 text-center cursor-pointer w-[60%] h-[70%] absolute left-0 right-0 top-0 bottom-0 m-auto"
        >
            {selectedImage ? (
                <div>
                    <img
                        src={selectedImage}
                        alt="Selected"
                        className="w-44 rounded"
                        onChange={props.getImage(selectedImage,"image")}
                    />
                    <p className="mt-2">Selected Image</p>
                    <button
                        onClick={handleRemoveImage}
                        className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Remove Image
                    </button>
                </div>
            ) : (
                <div className={'border-2 border-orange-500'}>
                    <p>Drag and drop or choose an image</p>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileInputChange}
                        className="hidden"
                        id="fileInput"
                    />
                    <label
                        htmlFor="fileInput"
                        className="cursor-pointer text-blue-500"
                    >
                        Choose File
                    </label>
                </div>
            )}
        </div>
    );


}
export default ImageUploader;