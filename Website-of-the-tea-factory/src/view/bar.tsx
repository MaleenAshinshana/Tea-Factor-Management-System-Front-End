

import {pieChart, Pie, Tooltip, PieChart, BarChart, XAxis, YAxis, CartesianGrid} from "recharts"
import {Legend} from "chart.js";

function Bar(){

    const data = [
        { name: "Facebook", users: 2000000000 },
        { name: "Instagram", users: 1500000000 },
        { name: "Twiter", users: 1000000000 },
        { name: "Telegram", users: 500000000 },
    ];



    return <section className={'w-full h-screen bg-amber-100'}>
        <div className={'w-[50%] h-[50%] bg-white absolute left-0 right-0 top-0 bottom-0 m-auto'}>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="users"
                    isAnimationActive={false}
                    data={data}
                    cx={200}
                    cy={200}
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 80,
                    bottom: 5,
                }}
                barSize={20}
            >
                <XAxis
                    dataKey="name"
                    scale="point"
                    padding={{ left: 10, right: 10 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
            </BarChart>

        </div>

    </section>
}
export default Bar;