let lending = [
    {
        num: 1,
        question: 'Есть ли доменное имя для Вашего нового сайта?',
        answers: [
            {text: 'Да, есть'},
            {text: 'Нет, нужна помощь в выборе доменного имени'},
            {text: 'Нет, домен выберу сам(а)'}
        ],
        type: 'radio'
    },
    {
        num: 2,
        question: 'Укажите цель вашего сайта (привлечение новых клиентов, увеличение продаж и т.п)',
        type: 'textarea'
    },
    {
        num: 3,
        question: 'Укажите соц сети компании, если имеются',
        type: 'textarea'
    },
    {
        num: 4,
        question: 'Имеются ли товары или услуги, которые Вы хотите разместить на сайте?',
        answers: [
            {text: 'Да', nextQuest: [5]},
            {text: 'Нет', nextQuest: [7]},
        ],
        type: 'radio'
    },
    {
        num: 5,
        question: 'Опишите свой продукт или услуги с технической стороны:',
        type: 'textarea'
    },
    {
        num: 6,
        question: 'Опишите свое УТП (Уникальное торговое предложение), если есть',
        type: 'textarea'
    },
    {
        num: 7,
        question: 'Требуются ли услуги копирайтера?',
        answers: [
            {text: 'Да'},
            {text: 'Нет'},
        ],
        type: 'radio'
    },
    {
        num: 8,
        question: 'Кто ваша целевая аудитория?',
        type: 'textarea'
    },
    {
        num: 9,
        question: 'Укажитель будущий стиль вашего сайта (например, строгий, магкий, яркий)',
        type: 'textarea'
    },
    {
        num: 10,
        question: 'Укажите цвета, которые вы хотели бы видеть на своем сайте:',
        type: 'textarea'
    },
    {
        num: 11,
        question: 'Имеется ли у вас фирменный логотип?',
        answers: [
            {text: 'Да'},
            {text: 'Нет'},
        ],
        type: 'radio'
    },
    {
        num: 12,
        question: 'Есть ли у вас материал для сайта (Фото, текста, акции, сертификаты, благодарственные письма)',
        answers: [
            {text: 'Да', nextQuest: [13]},
            {text: 'Нет', nextQuest: [14]},
        ],
        type: 'radio'
    },
    {
        num: 13,
        question: 'Перечислите то, что у вас имеется',
        type: 'textarea'
    },
    {
        num: 14,
        question: 'Требуется ли вам адаптивный дизайн и дизайн под мобильные устройства?',
        answers: [
            {text: 'Да'},
            {text: 'Нет'},
        ],
        type: 'radio'
    },
    {
        num: 15,
        question: 'Укажите или перечислите сайты ваших конкурентов, чем они выделятся на фоне других?',
        type: 'textarea'
    },
    {
        num: 16,
        question: 'Требуется ли дальнейшее администрирование сайта?',
        answers: [
            {text: 'Да'},
            {text: 'Нет'},
        ],
        type: 'radio'
    },
    {
        num: 17,
        question: 'Укажите то, что бы вы точно не хотели видеть на своем сайте',
        type: 'textarea'
    },
    {
        num: 18,
        question: 'Напишите свои дополнительные пожелания к сайту, которые вы не смогли уточнить во время заполнения брифа',
        type: 'textarea'
    }
]

let siteCard = [
    {
        num: 1,
        question: 'Есть ли доменное имя для Вашего нового сайта?',
        answers: [
            {text: 'Да, есть'},
            {text: 'Нет, нужна помощь в выборе доменного имени'},
            {text: 'Нет, домен выберу сам(а)'}
        ],
        type: 'radio'
    },
    {
        num: 2,
        question: 'Укажите цель вашего сайта (привлечение новых клиентов, увеличение продаж)',
        type: 'textarea'
    },
    {
        num: 3,
        question: 'Укажите соц сети компании, если имеются',
        type: 'textarea'
    },
    {
        num: 4,
        question: 'Имеются ли товары или услуги, которые Вы хотите разместить на сайте?',
        answers: [
            {text: 'Да', questTotal: '10', nextQuest: [5]},
            {text: 'Нет', questTotal: '11', nextQuest: [7]},
        ],
        type: 'radio'
    },
    {
        num: 5,
        question: 'Опишите свой продукт или услуги с технической стороны:',
        type: 'textarea'
    },
    {
        num: 6,
        question: 'Опишите свое УТП (Уникальное торговое предложение), если есть',
        type: 'textarea'
    },
    {
        num: 7,
        question: 'Требуются ли услуги копирайтера?',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 8,
        question: 'Кто ваша целевая аудитория?',
        type: 'textarea'
    },
    {
        num: 9,
        question: 'Укажитель будущий стиль вашего сайта (например, строгий, магкий, яркий)',
        type: 'textarea'
    },
    {
        num: 10,
        question: 'Укажите цвета, которые вы хотели бы видеть на своем сайте:',
        type: 'textarea'
    },
    {
        num: 11,
        question: 'Имеется ли у вас фирменный логотип?',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 12,
        question: 'Есть ли у вас материал для сайта (Фото, текста, акции, сертификаты, благодарственные письма)',
        answers: [
            {text: 'Да', questTotal: '10', nextQuest: [13]},
            {text: 'Нет', questTotal: '11', nextQuest: [14]},
        ],
        type: 'radio'
    },
    {
        num: 13,
        question: 'Перечислите то, что у вас имеется',
        type: 'textarea'
    },
    {
        num: 14,
        question: 'Требуется ли вам адаптивный дизайн и дизайн под мобильные устройства?',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 15,
        question: 'Укажите или перечислите сайты ваших конкурентов, чем они выделятся на фоне других?',
        type: 'textarea'
    },
    {
        num: 16,
        question: 'Требуется ли дальнейшее администрирование сайта?',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 17,
        question: 'Укажите то, что бы вы точно не хотели видеть на своем сайте',
        type: 'textarea'
    },
    {
        num: 18,
        question: 'Какие страницы нужны на сайте? (До 3 страниц, например, главная, контакты. Можете описать содержание страниц)',
        type: 'textarea'
    },
    {
        num: 19,
        question: 'Напишите свои дополнительные пожелания к сайту, которые вы не смогли уточнить во время заполнения брифа',
        type: 'textarea'
    }
]

let corporate = [
    {
        num: 0,
        question: 'Какая услуга Вам необходима?(Корпоратив)',
        answers: [
            {text: 'Landing-page', questTotal: '10'},
            {text: 'Сайт-визитка', questTotal: '11'},
            {text: 'Корпоративный сайт', questTotal: '12'},
            {text: 'Интернет магазин', questTotal: '13'},
            {text: 'Сайт-каталог', questTotal: '14'},
            {text: 'Блог', questTotal: '15'},
            {text: 'Эконом сайт', questTotal: '16'},
            {text: 'Дизайн сайта', questTotal: '17'},
            {text: 'Редизайн сайта', questTotal: '18'},
            {text: 'Другое', questTotal: '19'},
        ],
        type: 'radio'
    },
    {
        num: 1,
        question: 'Есть ли доменное имя для Вашего нового сайта?',
        answers: [
            {text: 'Да, есть'},
            {text: 'Нет, нужна помощь в выборе доменного имени'},
            {text: 'Нет, домен выберу сам(а)'}
        ],
        type: 'radio'
    },
    {
        num: 1.1,
        question: 'Укажите ваш будущий домен, если он у вас есть:',
        type: 'text'
    },
    {
        num: 2,
        question: 'Укажите цель вашего сайта (привлечение новых клиентов, увеличение продаж)',
        type: 'textarea'
    },
    {
        num: 3,
        question: 'Укажите соц сети компании, если имеются',
        type: 'textarea'
    },
    {
        num: 4,
        question: 'Имеются ли товары или услуги, которые Вы хотите разместить на сайте?',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 4.1,
        question: 'Опишите свой продукт или услуги с технической стороны:',
        type: 'textarea'
    },
    {
        num: 4.2,
        question: 'Опишите свое УТП (Уникальное торговое предложение), если есть',
        type: 'textarea'
    },
    {
        num: 5,
        question: 'Требуются ли услуги копирайтера?',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 6,
        question: 'Кто ваша целевая аудитория?',
        type: 'textarea'
    },
    {
        num: 7,
        question: 'Укажитель будущий стиль вашего сайта (например, строгий, магкий, яркий)',
        type: 'textarea'
    },
    {
        num: 8,
        question: 'Укажите цвета, которые вы хотели бы видеть на своем сайте:',
        type: 'textarea'
    },
    {
        num: 9,
        question: 'Имеется ли у вас фирменный логотип?',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 10,
        question: 'Есть ли у вас материал для сайта (Фото, текста, акции, сертификаты, благодарственные письма)',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 10.1,
        question: 'Перечислите то, что у вас имеется',
        type: 'textarea'
    },
    {
        num: 11,
        question: 'Требуется ли вам адаптивный дизайн и дизайн под мобильные устройства?',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 12,
        question: 'Укажите или перечислите сайты ваших конкурентов, чем они выделятся на фоне других?',
        type: 'textarea'
    },
    {
        num: 13,
        question: 'Требуется ли вам административная панель для сайта? ',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 13.1,
        question: 'Опишите требования к административной панели и ее функционал ',
        type: 'textarea'
    },
    {
        num: 14,
        question: 'Требуется ли дальнейшее администрирование сайта?',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 15,
        question: 'Укажите то, что бы вы точно не хотели видеть на своем сайте',
        type: 'textarea'
    },
    {
        num: 16,
        question: 'Какие страницы нужны на сайте?(Перечислите)',
        type: 'textarea'
    },
    {
        num: 17,
        question: 'Напишите свои дополнительные пожелания к сайту, которые вы не смогли уточнить во время заполнения брифа',
        type: 'textarea'
    }
]

let store = [
    {
        num: 0,
        question: 'Какая услуга Вам необходима?(Интернет магазин)',
        answers: [
            {text: 'Landing-page', questTotal: '10'},
            {text: 'Сайт-визитка', questTotal: '11'},
            {text: 'Корпоративный сайт', questTotal: '12'},
            {text: 'Интернет магазин', questTotal: '13'},
            {text: 'Сайт-каталог', questTotal: '14'},
            {text: 'Блог', questTotal: '15'},
            {text: 'Эконом сайт', questTotal: '16'},
            {text: 'Дизайн сайта', questTotal: '17'},
            {text: 'Редизайн сайта', questTotal: '18'},
            {text: 'Другое', questTotal: '19'},
        ],
        type: 'radio'
    },
    {
        num: 1,
        question: 'Есть ли доменное имя для Вашего нового сайта?',
        answers: [
            {text: 'Да, есть'},
            {text: 'Нет, нужна помощь в выборе доменного имени'},
            {text: 'Нет, домен выберу сам(а)'}
        ],
        type: 'radio'
    },
    {
        num: 1.1,
        question: 'Укажите ваш будущий домен, если он у вас есть:',
        type: 'text'
    },
    {
        num: 2,
        question: 'Укажите цель вашего сайта (привлечение новых клиентов, увеличение продаж)',
        type: 'textarea'
    },
    {
        num: 3,
        question: 'Укажите соц сети компании, если имеются',
        type: 'textarea'
    },
    {
        num: 4,
        question: 'Укажите товары или услуги, которые вы планируете продавать?',
        type: 'textarea'
    },
    {
        num: 4.1,
        question: 'Опишите свой продукт или услуги с технической стороны:',
        type: 'textarea'
    },
    {
        num: 5,
        question: 'Требуются ли услуги копирайтера?',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 6,
        question: 'Кто ваша целевая аудитория?',
        type: 'textarea'
    },
    {
        num: 7,
        question: 'Укажитель будущий стиль вашего сайта (например, строгий, магкий, яркий)',
        type: 'textarea'
    },
    {
        num: 8,
        question: 'Укажите цвета, которые вы хотели бы видеть на своем сайте:',
        type: 'textarea'
    },
    {
        num: 9,
        question: 'Имеется ли у вас фирменный логотип?',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 10,
        question: 'Есть ли у вас материал для сайта (Фото, текста, акции, сертификаты, благодарственные письма)',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 10.1,
        question: 'Перечислите то, что у вас имеется',
        type: 'textarea'
    },
    {
        num: 11,
        question: 'Требуется ли вам адаптивный дизайн и дизайн под мобильные устройства?',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 12,
        question: 'Укажите или перечислите сайты ваших конкурентов, чем они выделятся на фоне других?',
        type: 'textarea'
    },
    {
        num: 13,
        question: 'Требуется ли вам административная панель для сайта? ',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 13.1,
        question: 'Опишите требования к административной панели и ее функционал ',
        type: 'textarea'
    },
    {
        num: 14,
        question: 'Требуется ли дальнейшее администрирование сайта?',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 15,
        question: 'Какую CMS нужно подклчить к сайту?',
        type: 'textarea'
    },
    {
        num: 16,
        question: 'Опишите требования к сетке товаров',
        type: 'textarea'
    },
    {
        num: 17,
        question: 'Опишите требования к странице товаров',
        type: 'textarea'
    },
    {
        num: 18,
        question: 'Укажите то, что бы вы точно не хотели видеть на своем сайте',
        type: 'textarea'
    },
    {
        num: 19,
        question: 'Какие страницы нужны на сайте?(Перечислите)',
        type: 'textarea'
    },
    {
        num: 20,
        question: 'Напишите свои дополнительные пожелания к сайту, которые вы не смогли уточнить во время заполнения брифа',
        type: 'textarea'
    }
]

let vitrina = [
    {
        num: 0,
        question: 'Какая услуга Вам необходима?(Интернет каталог)',
        answers: [
            {text: 'Landing-page', questTotal: '10'},
            {text: 'Сайт-визитка', questTotal: '11'},
            {text: 'Корпоративный сайт', questTotal: '12'},
            {text: 'Интернет магазин', questTotal: '13'},
            {text: 'Сайт-каталог', questTotal: '14'},
            {text: 'Блог', questTotal: '15'},
            {text: 'Эконом сайт', questTotal: '16'},
            {text: 'Дизайн сайта', questTotal: '17'},
            {text: 'Редизайн сайта', questTotal: '18'},
            {text: 'Другое', questTotal: '19'},
        ],
        type: 'radio'
    },
    {
        num: 1,
        question: 'Есть ли доменное имя для Вашего нового сайта?',
        answers: [
            {text: 'Да, есть'},
            {text: 'Нет, нужна помощь в выборе доменного имени'},
            {text: 'Нет, домен выберу сам(а)'}
        ],
        type: 'radio'
    },
    {
        num: 1.1,
        question: 'Укажите ваш будущий домен, если он у вас есть:',
        type: 'text'
    },
    {
        num: 2,
        question: 'Укажите цель вашего сайта (привлечение новых клиентов, увеличение продаж)',
        type: 'textarea'
    },
    {
        num: 3,
        question: 'Укажите соц сети компании, если имеются',
        type: 'textarea'
    },
    {
        num: 4,
        question: 'Укажите товары или услуги, которые вы планируете демонстрировать?',
        type: 'textarea'
    },
    {
        num: 4.1,
        question: 'Опишите свой продукт или услуги с технической стороны:',
        type: 'textarea'
    },
    {
        num: 5,
        question: 'Требуются ли услуги копирайтера?',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 6,
        question: 'Кто ваша целевая аудитория?',
        type: 'textarea'
    },
    {
        num: 7,
        question: 'Укажитель будущий стиль вашего сайта (например, строгий, магкий, яркий)',
        type: 'textarea'
    },
    {
        num: 8,
        question: 'Укажите цвета, которые вы хотели бы видеть на своем сайте:',
        type: 'textarea'
    },
    {
        num: 9,
        question: 'Имеется ли у вас фирменный логотип?',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 10,
        question: 'Есть ли у вас материал для сайта (Фото, текста, акции, сертификаты, благодарственные письма)',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 10.1,
        question: 'Перечислите то, что у вас имеется',
        type: 'textarea'
    },
    {
        num: 11,
        question: 'Требуется ли вам адаптивный дизайн и дизайн под мобильные устройства?',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 12,
        question: 'Укажите или перечислите сайты ваших конкурентов, чем они выделятся на фоне других?',
        type: 'textarea'
    },
    {
        num: 13,
        question: 'Требуется ли вам административная панель для сайта? ',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 13.1,
        question: 'Опишите требования к административной панели и ее функционал ',
        type: 'textarea'
    },
    {
        num: 14,
        question: 'Требуется ли дальнейшее администрирование сайта?',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 15,
        question: 'Опишите требования к сетке товаров',
        type: 'textarea'
    },
    {
        num: 16,
        question: 'Опишите требования к странице товаров',
        type: 'textarea'
    },
    {
        num: 17,
        question: 'Укажите то, что бы вы точно не хотели видеть на своем сайте',
        type: 'textarea'
    },
    {
        num: 18,
        question: 'Какие страницы нужны на сайте?(Перечислите)',
        type: 'textarea'
    },
    {
        num: 19,
        question: 'Напишите свои дополнительные пожелания к сайту, которые вы не смогли уточнить во время заполнения брифа',
        type: 'textarea'
    }
]

let blog = [
    {
        num: 0,
        question: 'Какая услуга Вам необходима?(Блог)',
        answers: [
            {text: 'Landing-page', questTotal: '10'},
            {text: 'Сайт-визитка', questTotal: '11'},
            {text: 'Корпоративный сайт', questTotal: '12'},
            {text: 'Интернет магазин', questTotal: '13'},
            {text: 'Сайт-каталог', questTotal: '14'},
            {text: 'Блог', questTotal: '15'},
            {text: 'Эконом сайт', questTotal: '16'},
            {text: 'Дизайн сайта', questTotal: '17'},
            {text: 'Редизайн сайта', questTotal: '18'},
            {text: 'Другое', questTotal: '19'},
        ],
        type: 'radio'
    },
    {
        num: 1,
        question: 'Есть ли доменное имя для Вашего нового сайта?',
        answers: [
            {text: 'Да, есть'},
            {text: 'Нет, нужна помощь в выборе доменного имени'},
            {text: 'Нет, домен выберу сам(а)'}
        ],
        type: 'radio'
    },
    {
        num: 1.1,
        question: 'Укажите ваш будущий домен, если он у вас есть:',
        type: 'text'
    },
    {
        num: 2,
        question: 'Укажите цель вашего сайта (привлечение новых клиентов, увеличение продаж)',
        type: 'textarea'
    },
    {
        num: 3,
        question: 'Укажите соц сети компании, если имеются',
        type: 'textarea'
    },
    {
        num: 4,
        question: 'Требуются ли услуги копирайтера?',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 5,
        question: 'Кто ваша целевая аудитория?',
        type: 'textarea'
    },
    {
        num: 6,
        question: 'Укажитель будущий стиль вашего сайта (например, строгий, магкий, яркий)',
        type: 'textarea'
    },
    {
        num: 7,
        question: 'Укажите цвета, которые вы хотели бы видеть на своем сайте:',
        type: 'textarea'
    },
    {
        num: 8,
        question: 'Имеется ли у вас фирменный логотип?',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 9,
        question: 'Есть ли у вас материал для сайта (Фото, текста, акции, сертификаты, благодарственные письма)',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 9.1,
        question: 'Перечислите то, что у вас имеется',
        type: 'textarea'
    },
    {
        num: 10,
        question: 'Требуется ли вам адаптивный дизайн и дизайн под мобильные устройства?',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 11,
        question: 'Требуется ли вам административная панель для сайта? ',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 11.1,
        question: 'Опишите требования к административной панели и ее функционал ',
        type: 'textarea'
    },
    {
        num: 12,
        question: 'Требуется ли дальнейшее администрирование сайта?',
        answers: [
            {text: 'Да', questTotal: '10'},
            {text: 'Нет', questTotal: '11'},
        ],
        type: 'radio'
    },
    {
        num: 13,
        question: 'Укажите то, что бы вы точно не хотели видеть на своем сайте',
        type: 'textarea'
    },
    {
        num: 14,
        question: 'Какие страницы нужны на сайте?(Перечислите)',
        type: 'textarea'
    },
    {
        num: 15,
        question: 'Напишите свои дополнительные пожелания к сайту, которые вы не смогли уточнить во время заполнения брифа',
        type: 'textarea'
    }
]

export {
    lending, siteCard, corporate, store, vitrina, blog
}