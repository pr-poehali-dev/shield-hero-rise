import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const animeNews = [
    {
      id: 1,
      title: "Новый сезон Восхождения Героя Щита",
      description: "Анонсирован выход третьего сезона популярного аниме",
      image: "/img/36c1a77e-b5ab-47f3-b183-a060246dc567.jpg",
      date: "2024-01-15",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Интервью с создателем",
      description: "Эксклюзивное интервью с автором ранобэ",
      image: "/img/36c1a77e-b5ab-47f3-b183-a060246dc567.jpg",
      date: "2024-01-14",
      rating: 4.5,
    },
  ];

  const watchingList = [
    { title: "Восхождение Героя Щита", episode: "24/25", progress: 96 },
    { title: "Магическая Академия", episode: "12/24", progress: 50 },
    { title: "Путь Мечника", episode: "8/12", progress: 67 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-amber-900">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm border-b border-amber-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" className="text-amber-500" size={32} />
              <h1 className="text-2xl font-bold text-amber-500 font-serif">
                Портал Героя Щита
              </h1>
            </div>
            <nav className="flex space-x-1">
              <Button
                variant={activeTab === "home" ? "default" : "ghost"}
                onClick={() => setActiveTab("home")}
                className="text-amber-200 hover:text-amber-500"
              >
                <Icon name="Home" className="mr-2" size={16} />
                Главная
              </Button>
              <Button
                variant={activeTab === "news" ? "default" : "ghost"}
                onClick={() => setActiveTab("news")}
                className="text-amber-200 hover:text-amber-500"
              >
                <Icon name="Newspaper" className="mr-2" size={16} />
                Новости
              </Button>
              <Button
                variant={activeTab === "watch" ? "default" : "ghost"}
                onClick={() => setActiveTab("watch")}
                className="text-amber-200 hover:text-amber-500"
              >
                <Icon name="Play" className="mr-2" size={16} />
                Эфир
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeTab === "home" && (
          <div className="space-y-8">
            {/* Hero Section */}
            <section className="text-center py-12">
              <div
                className="rounded-2xl bg-gradient-to-r from-slate-800 to-amber-800 p-8 mb-8"
                style={{
                  backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.8), rgba(146, 64, 14, 0.8)), url(/img/36c1a77e-b5ab-47f3-b183-a060246dc567.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h2 className="text-5xl font-bold text-amber-200 mb-4 font-serif">
                  Добро пожаловать в мир аниме
                </h2>
                <p className="text-xl text-amber-100 mb-6">
                  Погрузитесь в захватывающие истории героев и их приключений
                </p>
                <div className="flex justify-center space-x-4">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                    <Icon name="Play" className="mr-2" size={20} />
                    Начать просмотр
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-amber-500 text-amber-200 hover:bg-amber-500/10"
                  >
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Расписание
                  </Button>
                </div>
              </div>
            </section>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-slate-800/50 border-amber-500/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-amber-200 flex items-center">
                    <Icon
                      name="Star"
                      className="mr-2 text-amber-500"
                      size={20}
                    />
                    Рейтинг
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-amber-500">4.8/5</div>
                  <p className="text-slate-400">Средний рейтинг</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-amber-500/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-amber-200 flex items-center">
                    <Icon
                      name="Users"
                      className="mr-2 text-amber-500"
                      size={20}
                    />
                    Пользователи
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-amber-500">
                    12,543
                  </div>
                  <p className="text-slate-400">Активных зрителей</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-amber-500/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-amber-200 flex items-center">
                    <Icon
                      name="Calendar"
                      className="mr-2 text-amber-500"
                      size={20}
                    />
                    Новые серии
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-amber-500">24</div>
                  <p className="text-slate-400">На этой неделе</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="bg-slate-800/50 border-amber-500/20">
              <CardHeader>
                <CardTitle className="text-amber-200 flex items-center">
                  <Icon name="Zap" className="mr-2 text-amber-500" size={20} />
                  Быстрые действия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button
                    variant="outline"
                    className="border-amber-500/50 text-amber-200 hover:bg-amber-500/10"
                  >
                    <Icon name="Plus" className="mr-2" size={16} />
                    Добавить в список
                  </Button>
                  <Button
                    variant="outline"
                    className="border-amber-500/50 text-amber-200 hover:bg-amber-500/10"
                  >
                    <Icon name="Bell" className="mr-2" size={16} />
                    Уведомления
                  </Button>
                  <Button
                    variant="outline"
                    className="border-amber-500/50 text-amber-200 hover:bg-amber-500/10"
                  >
                    <Icon name="MessageCircle" className="mr-2" size={16} />
                    Отзывы
                  </Button>
                  <Button
                    variant="outline"
                    className="border-amber-500/50 text-amber-200 hover:bg-amber-500/10"
                  >
                    <Icon name="Download" className="mr-2" size={16} />
                    Загрузки
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "news" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-amber-200 mb-6 font-serif">
              Последние новости
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {animeNews.map((news) => (
                <Card
                  key={news.id}
                  className="bg-slate-800/50 border-amber-500/20 hover:border-amber-500/40 transition-colors"
                >
                  <div className="aspect-video bg-slate-700 rounded-t-lg overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className="bg-amber-600 text-white"
                      >
                        Новости
                      </Badge>
                      <div className="flex items-center text-amber-500">
                        <Icon name="Star" size={16} className="mr-1" />
                        {news.rating}
                      </div>
                    </div>
                    <CardTitle className="text-amber-200">
                      {news.title}
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      {news.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">
                        {news.date}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-amber-500/50 text-amber-200"
                      >
                        Читать далее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "watch" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-amber-200 mb-6 font-serif">
              Просмотр аниме
            </h2>

            {/* Player Section */}
            <Card className="bg-slate-800/50 border-amber-500/20">
              <CardHeader>
                <CardTitle className="text-amber-200 flex items-center">
                  <Icon name="Play" className="mr-2 text-amber-500" size={20} />
                  Аниме плеер
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Icon
                      name="Play"
                      size={64}
                      className="text-amber-500 mx-auto mb-4"
                    />
                    <p className="text-amber-200 text-lg">
                      Выберите аниме для просмотра
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      className="bg-amber-600 hover:bg-amber-700"
                    >
                      <Icon name="Play" className="mr-2" size={16} />
                      Воспроизвести
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-amber-500/50 text-amber-200"
                    >
                      <Icon name="Settings" className="mr-2" size={16} />
                      Субтитры
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2 text-amber-200">
                    <Icon name="Volume2" size={16} />
                    <span className="text-sm">Японский | Русские субтитры</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Watching List */}
            <Card className="bg-slate-800/50 border-amber-500/20">
              <CardHeader>
                <CardTitle className="text-amber-200 flex items-center">
                  <Icon name="List" className="mr-2 text-amber-500" size={20} />
                  Мой список просмотра
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {watchingList.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex-1">
                        <h3 className="text-amber-200 font-medium">
                          {item.title}
                        </h3>
                        <p className="text-slate-400 text-sm">
                          Эпизод {item.episode}
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-24">
                          <Progress value={item.progress} className="h-2" />
                        </div>
                        <span className="text-amber-500 text-sm">
                          {item.progress}%
                        </span>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-amber-500"
                        >
                          <Icon name="Play" size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/95 border-t border-amber-500/20 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-amber-200 font-bold mb-4">
                Портал Героя Щита
              </h3>
              <p className="text-slate-400 text-sm">
                Лучшее место для просмотра аниме в стиле средневекового фэнтези
              </p>
            </div>
            <div>
              <h4 className="text-amber-200 font-semibold mb-3">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-slate-400 hover:text-amber-500">
                    Главная
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-amber-500">
                    Новости
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-amber-500">
                    Эфир
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-amber-200 font-semibold mb-3">Функции</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-slate-400 hover:text-amber-500">
                    Рейтинги
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-amber-500">
                    Календарь
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-amber-500">
                    Отзывы
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-amber-200 font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-slate-400 hover:text-amber-500">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-amber-500">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-amber-500">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-6 bg-amber-500/20" />
          <div className="text-center text-slate-400 text-sm">
            © 2024 Портал Героя Щита. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
