const data = {

    "종이류": {
        "피자박스": ["깨끗함", "기름 조금 묻음", "기름 심하게 묻음"],
        "종이컵": ["깨끗함", "음료 조금 남음", "음료 많이 남음"],
        "영수증": ["일반 상태"],
        "우유팩": ["세척 완료", "세척 안 함"],
        "택배상자": ["깨끗함", "테이프 제거 안 함"],
        "계란판": ["깨끗함", "오염됨"],
        "전단지": ["일반 상태"],
        "종이봉투": ["깨끗함", "오염됨"],
        "책": ["일반 상태"],
        "신문지": ["일반 상태"]
    },

    "플라스틱": {
        "배달용기": ["세척 완료", "양념 조금 남음", "양념 많이 남음"],
        "칫솔": ["일반 상태"],
        "빨대": ["일반 상태"],
        "샴푸통": ["내용물 제거", "내용물 남음"],
        "세제통": ["내용물 제거", "내용물 남음"],
        "페트병": ["라벨 제거", "라벨 미제거"],
        "요구르트병": ["세척 완료", "세척 안 함"],
        "화장품 용기": ["깨끗함", "내용물 남음"],
        "물통": ["깨끗함", "오염됨"],
        "플라스틱 뚜껑": ["일반 상태"]
    },

    "유리류": {
        "소주병": ["깨끗함"],
        "맥주병": ["깨끗함"],
        "음료수병": ["깨끗함"],
        "거울": ["일반 상태"],
        "깨진 유리": ["파손됨"],
        "전구": ["일반 상태"],
        "화장품 유리병": ["깨끗함", "오염됨"]
    },

    "비닐류": {
        "과자봉지": ["깨끗함", "내용물 묻음"],
        "라면봉지": ["깨끗함", "내용물 묻음"],
        "비닐봉투": ["깨끗함", "오염됨"],
        "택배비닐": ["깨끗함", "송장 제거 안 함"],
        "지퍼백": ["깨끗함", "오염됨"],
        "랩": ["일반 상태"]
    },

    "캔류": {
        "음료캔": ["세척 완료", "세척 안 함"],
        "참치캔": ["세척 완료", "기름 남음"],
        "스프레이캔": ["내용물 제거", "내용물 남음"],
        "캔뚜껑": ["일반 상태"],
        "알루미늄캔": ["깨끗함"]
    },

    "음식물/일반쓰레기": {
        "조개껍데기": ["일반 상태"],
        "닭뼈": ["일반 상태"],
        "돼지뼈": ["일반 상태"],
        "게껍데기": ["일반 상태"],
        "새우껍질": ["일반 상태"],
        "커피찌꺼기": ["일반 상태"],
        "복숭아씨": ["일반 상태"],
        "아보카도씨": ["일반 상태"],
        "파인애플껍질": ["일반 상태"],
        "양파껍질": ["일반 상태"]
    },

    "전자제품·기타": {
        "건전지": ["사용 완료"],
        "보조배터리": ["사용 완료"],
        "형광등": ["사용 완료"],
        "LED 전등": ["사용 완료"],
        "휴대폰": ["폐기"],
        "이어폰": ["폐기"],
        "충전기": ["폐기"]
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

function searchItem() {

    const keyword = document.getElementById("searchInput").value.trim();

    const resultDiv = document.getElementById("searchResult");

    let found = false;

    for (const category in data) {

        for (const item in data[category]) {

            if (item.includes(keyword)) {

                resultDiv.innerHTML = `
                    <h3>검색 결과</h3>
                    <p><strong>${item}</strong></p>
                    <p>카테고리: ${category}</p>
                `;

                found = true;
                return;
            }
        }
    }

    if (!found) {

        resultDiv.innerHTML = `
            <h3>검색 결과</h3>
            <p>해당 품목을 찾을 수 없습니다.</p>
        `;
    }
}
