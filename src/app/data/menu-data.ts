import {Imenu} from "../models/menu-interface";


export const menudata: Imenu[] = [
    {
        id: 1,
        name: 'Малоформатные изделия',
        link: 'link',
        drop: true,
        sublist: [
            { id: 1, name: "Визитки", link: "link" },
            { id: 2, name: "Наклейки", link: "link" },
            { id: 3, name: "Этикетки", link: "link" },
            { id: 4, name: "Афиши", link: "link" },
            { id: 5, name: "Брошюры, каталоги, журналы", link: "link" },
            { id: 6, name: "Открытки, пригласительные", link: "link" },
            { id: 7, name: "Флаеры, листовки", link: "link" },
            { id: 8, name: "Буклеты", link: "link" },
            { id: 9, name: "Воблеры", link: "link" },
            { id: 10, name: "Фигурные изделия, хенгеры", link: "link" },
            { id: 11, name: "Коробочки упаковочные", link: "link" },
            { id: 12, name: "Календари", link: "link" },
        ]
    },
    {
        id: 2,
        name: "Широкоформатные изделия",
        link: "link",
        drop: true,
        sublist: [
            { id: 1, name: "Чертежи", link: "link" },
            { id: 2, name: "Плакаты, постеры, холсты", link: "link" },
            { id: 3, name: "Широкоформатный Оракал", link: "link" },
            { id: 4, name: "X-Баннеры, Ролл-Апы", link: "link" },
            { id: 5, name: "Афиши", link: "link" },
            { id: 6, name: "Архитектурные проекты", link: "link" },
            { id: 7, name: "Планшеты на жесткой основе", link: "link" },
            { id: 8, name: "Календари перекидные", link: "link" }
        ]
    },
    {
        id: 3,
        name: "Услуги",
        link: "link",
        drop: true,
        sublist: [
            { id: 1, name: "Дизайн, макет", link: "link" },
            { id: 2, name: "Малоформатная печать", link: "link" },
            { id: 3, name: "Широкоформатная печать", link: "link" },
            { id: 4, name: "Широкоформатная УФ печать", link: "link" },
            { id: 5, name: "Ксерокс/Сканирование", link: "link" },
            { id: 6, name: "Высечка, вырезка плоттером", link: "link" },
            { id: 7, name: "Ламинация", link: "link" }
        ]
    },
    {
        id: 4,
        name: "Поддержка",
        link: "link",
        drop: true,
        sublist: [
            { id: 1, name: "Требования к макетам", link: "link" },
            { id: 2, name: "Как сделать заказ", link: "link" },
            { id: 3, name: "Способы оплаты", link: "link" },
            { id: 4, name: "Доставка", link: "link" },
            { id: 5, name: "Программа лояльности", link: "link" }
        ]
    },
    {
        id: 5,
        name: "Контакты",
        link: "contacts",
        drop: false,
    }
]
