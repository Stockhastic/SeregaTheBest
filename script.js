document.addEventListener("DOMContentLoaded", () => {
    // Переключение скинов
    const skinButtons = document.querySelectorAll(".ui-control__skin .skin-item");
    const spinningSeregaImg = document.querySelector(".spinning-serega img");

    const skins = [
        "graphics/serega_main.png",
        "graphics/serega_police.png",
        "graphics/serega_magic.png",
        "graphics/serega_devil.png",
        "graphics/serega_pudge.png",
        "graphics/serega_batman.png"
    ];

    skinButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // Удаляем класс active у всех кнопок
            skinButtons.forEach(btn => btn.classList.remove("active"));
            // Добавляем класс active к нажатой кнопке
            button.classList.add("active");
            // Меняем src изображения на соответствующий скин
            spinningSeregaImg.src = skins[index];
        });
    });

    // Переключение фонов
    const backgroundButtons = document.querySelectorAll(".ui-control__background .background-item");
    const body = document.body;

    const backgrounds = [
        "background-gif4",
        "background-gif1",
        "background-gif2",
        "background-gif3",
        "background-trump",
        "background-firelink",
        "background-bezmyatezhnost"
    ];

    backgroundButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // Удаляем класс active у всех кнопок
            backgroundButtons.forEach(btn => btn.classList.remove("active"));
            // Добавляем класс active к нажатой кнопке
            button.classList.add("active");

            // Удаляем все классы фона у body
            backgrounds.forEach(bg => body.classList.remove(bg));
            // Добавляем соответствующий класс фона
            body.classList.add(backgrounds[index]);
        });
    });
});