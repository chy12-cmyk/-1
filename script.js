const data = {
    "종이류": ["피자박스", "종이컵", "영수증", "우유팩"],
    "플라스틱": ["배달용기", "칫솔", "빨대", "샴푸통"],
    "유리류": ["소주병", "거울", "깨진 유리"],
    "음식물/일반쓰레기": ["조개껍데기", "닭뼈", "커피찌꺼기"]
};

function updateItems() {
    const category = document.getElementById("category").value;
    const itemSelect = document.getElementById("item");

    itemSelect.innerHTML = "";

    data[category].forEach(item => {
        const option = document.createElement("option");
        option.value = item;
        option.textContent = item;
        itemSelect.appendChild(option);
    });
}
