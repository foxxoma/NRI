function addSkill() {
    document.querySelector('.j-skills').innerHTML += `<div class="section j-block">
        <div class="j-rm-parent-block rm rm-section">Удалить навык</div>
        <div class="mastery-header">
            <input type="text" placeholder="Название навыка" style="flex-grow: 1;">
        </div>
        <div class="mastery-meta">
            <div>
                <label>Уровень:</label>
                <input type="text">
            </div>
            <div>
                <label>Бонус:</label>
                <input type="text" placeholder="+0">
            </div>
            <div>
                <label>Ресурс:</label>
                <input style="width: 100px;" type="text" placeholder="0/0">
            </div>
        </div>
        
        <div style="margin-bottom: 10px;" class="j-block">
            <div class="input-title jc-sb"><div>Владения</div><div class="j-rm-parent-block rm">Удалить блок</div></div>
            <textarea class="ownership" placeholder="Введите владения навыка"></textarea>
        </div>
        
        <div class="j-block">
            <div class="input-title jc-sb"><div>Умения</div> <div class="j-rm-parent-block rm">Удалить блок</div></div>
            <textarea class="ability" placeholder="Введите умения навыка"></textarea>
        </div>
    </div>`;

    rmParentBlockInit();
}

function rmParentBlockInit() {
    document.querySelectorAll('.j-rm-parent-block').forEach(function(el) {
        el.addEventListener('click', function() {
            el.closest('.j-block').remove();
        });
    });
}

window.onload = function() {
    rmParentBlockInit();
}
