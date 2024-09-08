import './style.css' 

const onClickAdd = () => {
    // テキストボックスの値を取得し、クリアする
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // li 生成
    const li = document.createElement("li");

    // div 生成
    const div = document.createElement("div");
    div.className = "list-row";

    // p 生成
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = inputText;

    // li タグの子要素に各要素を設定
    div.appendChild(p);
    li.appendChild(div);

    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li)
}

document.getElementById("add-button").addEventListener("click", onClickAdd);
