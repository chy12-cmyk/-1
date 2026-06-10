const data = {
    "종이류": {
        "피자박스": ["깨끗함", "기름 조금 묻음", "기름 심하게 묻음"],
        "종이컵": ["깨끗함", "음료 조금 남음", "음료 많이 남음"],
        "영수증": ["일반 상태"],
        "우유팩": ["세척 완료", "세척 안 함"]
    },

    "플라스틱": {
        "배달용기": ["세척 완료", "양념 조금 남음", "양념 많이 남음"],
        "칫솔": ["일반 상태"],
        "빨대": ["일반 상태"],
        "샴푸통": ["내용물 제거", "내용물 남음"]
    },

    "유리류": {
        "소주병": ["깨끗함"],
        "거울": ["일반 상태"],
        "깨진 유리": ["파손됨"]
    },

    "음식물/일반쓰레기": {
        "조개껍데기": ["일반 상태"],
        "닭뼈": ["일반 상태"],
        "커피찌꺼기": ["일반 상태"]
    }
};

const resultData = {

    "피자박스": {
        "깨끗함": {
            result: "종이류 배출",
            reason: "오염되지 않은 종이는 재활용 가능합니다."
        },
        "기름 조금 묻음": {
            result: "일반쓰레기",
            reason: "기름이 묻은 종이는 재활용이 어렵습니다."
        },
        "기름 심하게 묻음": {
            result: "일반쓰레기",
            reason: "심한 오염으로 재활용 불가합니다."
        }
    },

    "배달용기": {
        "세척 완료": {
            result: "플라스틱 배출",
            reason: "깨끗하게 세척된 플라스틱은 재활용 가능합니다."
        },
        "양념 조금 남음": {
            result: "일반쓰레기",
            reason: "음식물 오염이 남아있습니다."
        },
        "양념 많이 남음": {
            result: "일반쓰레기",
            reason: "재활용 공정에 방해됩니다."
        }
    }

};

function updateItems() {

    const category = document.getElementById("category").value;
    const itemSelect = document.getElementById("item");

    itemSelect.innerHTML = "";

    Object.keys(data[category]).forEach(item => {

        const option = document.createElement("option");

        option.value = item;
        option.textContent = item;

        itemSelect.appendChild(option);

    });

    updateStates();
}

function updateStates() {

    const category = document.getElementById("category").value;

    const item = document.getElementById("item").value;

    const stateSelect = document.getElementById("state");

    stateSelect.innerHTML = "";

    data[category][item].forEach(state => {

        const option = document.createElement("option");

        option.value = state;
        option.textContent = state;

        stateSelect.appendChild(option);

    });
}

window.onload = function() {
    updateItems();
};

function showResult() {

    const item = document.getElementById("item").value;
    const state = document.getElementById("state").value;

    const resultDiv = document.getElementById("result");

    if(resultData[item] && resultData[item][state]) {

        resultDiv.innerHTML = `
            <h3>결과</h3>
            <p><strong>배출방법:</strong> ${resultData[item][state].result}</p>
            <p><strong>이유:</strong> ${resultData[item][state].reason}</p>
        `;

    } else {

        resultDiv.innerHTML = `
            <h3>결과</h3>
            <p>아직 데이터가 등록되지 않았습니다.</p>
        `;

    }
}
