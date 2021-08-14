module.exports = {
  lang: 'ru-RU',
  title: 'Андрей Григорьевич Тысленко - Сайт Эксперта',
  description: 'Андрей Григорьевич Тысленко, сайт эксперта, описание мастер классов и полезные статьи по менеджменту и управлению персоналом',

  themeConfig: {
    repo: 'tyslenko-klishin/mobile',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Предложить изминения этой страницы',
    lastUpdated: 'Версия от ',

    //algolia: {
      //apiKey: 'c57105e511faa5558547599f120ceeba',
      //indexName: 'vitepress'
    //},

    //carbonAds: {
      //carbon: 'CEBDT27Y',
      //custom: 'CKYD62QM',
      //placement: 'vuejsorg'
    //},

    nav: [
      { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/config/': getConfigSidebar(),
      '/': getGuideSidebar()
    }
  }
}

function getGuideSidebar() {
  return [
    { text: 'Андрей Тысленко', link: '/about' },      
    { text: 'Открытые семинары',
		children: [
        { text: 'Бизнес и кризис', link: '/busness-crisis/' },
        { text: 'Владелец и топ-менеджмент', link: '/owner-top-manager/' },
        { text: 'Менеджмент в интересах собственника', link: '/owners-interest/' },
        { text: 'Генеральный директор', link: '/general-manager/' },
        { text: 'Профессиональный HR', link: '/pro-hr/' },
        { text: 'Специалист БИМС', link: '/bims/' },
        { text: 'Бизнес дети', link: '/business-children/' },
        { text: 'Методы повышения эффективности подбора и оценки персонала', link: '/hiring-methods/' }
      ]
    },    
    { text: 'Корпоративное обучение',
		children: [
        { text: 'Эффективное управление предприятием в современных условиях', link: '/managing-business/' },
        { text: 'Управление холдинговыми образованиями', link: '/holding-management/' },
        { text: 'Сессия стратегического планирования', link: '/strategic-planning/' }
      ]
    },    
    { text: 'Онлайн-курсы',
		children: [
        { text: 'Рациональное управление', link: '/rational-management/' },
        { text: 'Специалист БИМС онлайн', link: '/bims-online/' }
      ]
    }
  ]
}

function getConfigSidebar() {
  return [
    {
      text: 'App Config',
      children: [{ text: 'Basics', link: '/config/basics' }]
    },
    {
      text: 'Theme Config',
      children: [
        { text: 'Homepage', link: '/config/homepage' },
        { text: 'Algolia Search', link: '/config/algolia-search' },
        { text: 'Carbon Ads', link: '/config/carbon-ads' }
      ]
    }
  ]
}
