'use client';

import {
    AreaChart,
    CartesianGrid,
    Tooltip,
    XAxis,
    Area,
    YAxis,
    BarChart,
    Legend,
    Bar,
} from 'recharts';
import styles from './ui.module.scss';
import { AnalyticDataConversion, AnalyticDataSegment } from '../data';
import { Title } from '@/entities/title';

export const Analytic = () => {
    return (
        <>
            <div className={styles.layout}>
                <AreaChart
                    width={910}
                    height={311}
                    data={AnalyticDataConversion}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#colorUv)"
                    />
                    <Area
                        type="monotone"
                        dataKey="pv"
                        stroke="#82ca9d"
                        fillOpacity={1}
                        fill="url(#colorPv)"
                    />
                </AreaChart>
                <div>
                    <Title>
                        Конверисия загруженности спортивной инфраструктуры в г. Екатеринбург
                        (2023-2023)
                    </Title>
                </div>
            </div>
            <div className={styles.layout}>
                <BarChart width={730} height={250} data={AnalyticDataSegment}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
                <Title>
                    Анализ целевой аудитории, приходящей на спотривные мероприятия за 2022 год в г.
                    Верхняя Пышма
                </Title>
            </div>
        </>
    );
};
