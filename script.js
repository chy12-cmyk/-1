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
