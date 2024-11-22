import javascriptImage from '../img/javascript.png'
import seoImage from '../img/seo.png'
import wordpressImage from '../img/wordpress.png'

export default [
  {
    title: 'SEO для начинающих',
    author: 'Иван Иванович',
    date: '13 февраля 2023',
    description: 'Благодаря этому курсу вы научитесь задавливать конкурентов с помощью ссылочной массы, а не качественного контента.',
    image: {
      alt: 'seo',
      url: seoImage
    },
    slug: 'seo'
  },
  {
    title: 'WordPress разработка',
    author: 'Ольга Ольгина',
    date: '23 октября 2023',
    description: 'WordPress — топ за свои деньги. Изучите его, чтобы стать востребованным фрилансером.',
    image: {
      alt: 'Worldpress course',
      url: wordpressImage
    },
    slug: 'wordpress'
  },
  {
    title: 'JavaScript для чайников.',
    author: 'М. Михайловских',
    date: '30 ноября 2023',
    description: 'Курс подойдёт для любых чайников: электрических, газовых и даже для кастрюлек, временно подменяющих сломанный чайник.',
    image: {
      alt: 'JavaScript course',
      url: javascriptImage
    },
    slug: 'javascript'
  }
]
