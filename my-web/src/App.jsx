// Reactコンポーネントの外に関数を定義
function calculateBMI(weight, height) {
    const heightInMeter = height / 100;
    return (weight / (heightInMeter * heightInMeter)).toFixed(2);
}

function displayResult(bmi) {
    document.getElementById('result').innerHTML = `Your BMI is: ${bmi}`;
}

function showTrainingMenu(selection) {
    let menu = '';
    if (selection === 'active') {
        menu = `
            <h4>ランニング１５分</h4>
            <h4>腹筋５０回</h4>
            <h4>背筋３０回</h4>
            <h4>腕立て２０回</h4>
            <h4>バーピージャンプ２０回</h4>
            <h4>全身ストレッチ１０分</h4>
        `;
    } else if (selection === 'light') {
        menu = `
            <h4>腹筋２０回</h4>
            <h4>腕立て１０回</h4>
            <h4>全身ストレッチ５分</h4>
        `;
    } else if (selection === 'neutral') {
        menu = `
            <h4>バーピージャンプ５回</h4>
            <h4>ストレッチ１０分</h4>
        `;
    } else if (selection === 'strength') {
        menu = `
            <h4>腹筋５０回</h4>
            <h4>背筋３０回</h4>
            <h4>腕立て２０回</h4>
            <h4>プランク１分×３回</h4>
            <h4>ストレッチ１０分</h4>
        `;
    } else if (selection === 'stretch') {
        menu = `
            <h4>バーピージャンプ１０回</h4>
            <h4>足のストレッチ１０分</h4>
            <h4>上半身１０分</h4>
        `;
    }
    return menu;
}

// Reactコンポーネント
export default function App() {
    // Reactコンポーネント内のロジックはここに書く
    const handleCalculateBMI = () => {
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        
        const bmi = calculateBMI(weight, height);
        displayResult(bmi);
    };

    // 気分が変わった時のハンドラー
    const handleMoodChange = (event) => {
        const selectedMood = event.target.value;
        const trainingMenu = showTrainingMenu(selectedMood);
        document.getElementById('trainingMenu').innerHTML = trainingMenu;
    };

    return (
        <div>
            <h1>今日のダイエット</h1>
            {/* BMI計算関連の要素 */}
            <input type="number" id="weight" placeholder="体重(kg)" />
            <input type="number" id="height" placeholder="身長(cm)" />
            <button onClick={handleCalculateBMI}>BMIを計算する</button>
            <div id="result"></div>

            {/* 気分選択の要素 */}
            <div>
                <h4>今日はどんな気分ですか？</h4>
                <select id="mood" onChange={handleMoodChange}>
                    <option value="active">いっぱい動きたい</option>
                    <option value="light">ちょっとだけ運動したい</option>
                    <option value="neutral">あんま気分のらない</option>
                    <option value="strength">筋トレ多め</option>
                    <option value="stretch">ストレッチたくさん</option>
                </select>
            </div>

            {/* トレーニングメニュー */}
            <div id="trainingMenu"></div>
        </div>
    );
}
