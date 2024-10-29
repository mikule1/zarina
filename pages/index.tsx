import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { MobileMenu } from '../components/MobileMenu'
import { ThemeToggle } from '../components/ThemeToggle'
import { LanguageSelector } from '../components/LanguageSelector'
import Portfolio from '../components/Portfolio'
import { getImagePath } from '../utils/paths'
import { ShoppingCart, BookOpen, Target } from 'lucide-react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Home() {
  const { t } = useTranslation('common')

  // Define the items for expertise section
  const expertiseItems = {
    marketing: ['Разработка стратегии продвижения', 'Анализ целевой аудитории', 'Позиционирование бренда'],
    social: ['Создание контент-плана', 'Настройка таргетированной рекламы', 'Оформление профилей'],
    analytics: ['Анализ эффективности кампаний', 'Отслеживание KPI', 'Оптимизация рекламных кампаний']
  }

  // Define the items for services section
  const servicesItems = {
    strategic: ['Разработка маркетинговой стратегии', 'Анализ конкурентов', 'Позиционирование бренда'],
    social: ['Создание контент-стратегии', 'Настройка и ведение рекламных кампаний', 'Оформление и ведение аккаунтов'],
    consulting: ['Аудит текущего маркетинга', 'Рекомендации по развитию', 'Обучение команды'],
    analytics: ['Настройка систем аналитики', 'Отслеживание KPI', 'Ежемесячные отчеты']
  }

  // Define achievements with their values
  const achievements = [
    { key: 'projects', value: '10+' },
    { key: 'sales', value: '150%' },
    { key: 'budget', value: '100K €+' },
    { key: 'niches', value: '5+' }
  ]

  return (
    <>
      <Head>
        <title>Marketing Portfolio - Zarina</title>
        <meta name="description" content="Marketing and business development specialist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="container">
          <header className="flex items-center justify-between py-4">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              Zarina
            </Link>
            
            <div className="hidden md:flex items-center">
              <nav className="flex items-center space-x-8 mr-8">
                {['home', 'career', 'projects', 'expertise', 'services', 'contact'].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="nav-link"
                  >
                    {t(`nav.${item}`)}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center space-x-3 pl-8 border-l border-gray-200 dark:border-gray-700">
                <LanguageSelector />
                <ThemeToggle />
              </div>
            </div>

            <div className="flex md:hidden items-center">
              <div className="flex items-center space-x-2 mr-4">
                <LanguageSelector />
                <ThemeToggle />
              </div>
              <MobileMenu />
            </div>
          </header>

          <main>
            {/* Hero Section */}
            <section id="home" className="section pt-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                    {t('hero.title')}
                  </h1>
                  <div className="text-xl font-semibold text-primary-600 dark:text-primary-400">
                    {t('hero.subtitle')}
                  </div>
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    {t('hero.description')}
                  </p>
                  <button className="btn-primary">
                    {t('hero.cta')}
                  </button>
                </div>
                <div className="relative flex justify-center">
                  <div className="aspect-square rounded-full overflow-hidden w-full md:w-[85%]">
                    <Image
                      src={getImagePath("/images/1.jpg")}
                      alt="Zarina"
                      width={500}
                      height={500}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Career Journey */}
            <section id="career" className="section">
              <h2 className="section-title">{t('career.title')}</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="card">
                  <ShoppingCart className="w-12 h-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{t('career.blocks.start.title')}</h3>
                  <p>{t('career.blocks.start.text')}</p>
                </div>
                <div className="card">
                  <BookOpen className="w-12 h-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{t('career.blocks.education.title')}</h3>
                  <p>{t('career.blocks.education.text')}</p>
                </div>
                <div className="card">
                  <Target className="w-12 h-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{t('career.blocks.current.title')}</h3>
                  <p>{t('career.blocks.current.text')}</p>
                </div>
              </div>
            </section>

            {/* Key Projects */}
            <Portfolio />

            {/* Expertise */}
            <section id="expertise" className="section">
              <h2 className="section-title">{t('expertise.title')}</h2>
              <p className="text-center mb-12 text-lg">
                {t('expertise.description')}
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">{t('expertise.marketing.title')}</h3>
                  <ul className="space-y-2">
                    {expertiseItems.marketing.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">{t('expertise.social.title')}</h3>
                  <ul className="space-y-2">
                    {expertiseItems.social.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">{t('expertise.analytics.title')}</h3>
                  <ul className="space-y-2">
                    {expertiseItems.analytics.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Services */}
            <section id="services" className="section">
              <h2 className="section-title">{t('services.title')}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">{t('services.strategic.title')}</h3>
                  <ul className="space-y-2">
                    {servicesItems.strategic.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">{t('services.social.title')}</h3>
                  <ul className="space-y-2">
                    {servicesItems.social.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">{t('services.consulting.title')}</h3>
                  <ul className="space-y-2">
                    {servicesItems.consulting.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">{t('services.analytics.title')}</h3>
                  <ul className="space-y-2">
                    {servicesItems.analytics.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Achievements */}
            <section className="section bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <h2 className="section-title">{t('achievements.title')}</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {achievements.map((achievement) => (
                  <div key={achievement.key} className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">
                      {achievement.value}
                    </div>
                    <div>{t(`achievements.${achievement.key}`)}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="section text-center">
              <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
              <p className="text-xl mb-8">{t('cta.description')}</p>
              <button className="btn-primary">
                {t('cta.button')}
              </button>
            </section>
          </main>

          <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 dark:text-gray-300">
                © {new Date().getFullYear()} Zarina
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="nav-link">Instagram</a>
                <a href="#" className="nav-link">LinkedIn</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'ru', ['common'])),
    },
  }
}
