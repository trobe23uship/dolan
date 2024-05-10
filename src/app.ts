import { Chart, registerables } from 'chart.js';
import { getThrowsFromDatabase } from './database';
import { getScores } from './getScores';
Chart.register(...registerables);

const createChart = (scores: number[]) => {
    const ctx = document.getElementById('scoreChart') as HTMLCanvasElement;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: scores.map((_, i) => i),
            datasets: [{
                label: 'Score',
                data: scores,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        }
    });
}

const start = async () => {
    const throws = await getThrowsFromDatabase();
    const scores = getScores(throws);

   createChart(scores);
}

start(); 