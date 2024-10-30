import { BarChart } from "@mui/x-charts"
import { FC } from "react"
import { PopulationCounts } from "../types/country.types";


interface IPopulationCounts {
    counts: PopulationCounts[]
}

export const PopulationChart: FC<IPopulationCounts> = ({ counts }) => {

    const width = window.innerWidth;
    const height = window.innerHeight;
    const resolution = 750/1366;

    return (
        <div className="chart-container">
        <div className="chart">
            <BarChart 
                xAxis={[{ scaleType: 'band', dataKey: 'year' }]}
                grid={{ horizontal: true }}
                yAxis={[{
                    
                }]}
                dataset={counts}
                series={[{dataKey: 'value', label: 'Population'}]}
                width={width > 700 ? width * resolution : width }
                height={height * 0.4}
                
                margin={{
                    left: 80,
                    right: 10,
                }}
                resolveSizeBeforeRender={true}
            />
        </div>
        </div>
    )
}