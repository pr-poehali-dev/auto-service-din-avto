import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  const services = [
    { icon: "Wrench", title: "Техническое обслуживание", description: "Регулярное ТО всех марок автомобилей" },
    { icon: "Gauge", title: "Компьютерная диагностика", description: "Современное оборудование для точной диагностики" },
    { icon: "PaintBucket", title: "Кузовной ремонт", description: "Покраска и восстановление кузова" },
    { icon: "CircleDot", title: "Шиномонтаж", description: "Быстрая замена и балансировка колес" },
    { icon: "Sparkles", title: "Детейлинг", description: "Полировка и химчистка салона" },
    { icon: "Settings", title: "Ремонт двигателя", description: "Профессиональный ремонт любой сложности" },
  ];

  const prices = [
    { service: "Замена масла", price: "от 1 500 ₽" },
    { service: "Компьютерная диагностика", price: "от 1 000 ₽" },
    { service: "Замена тормозных колодок", price: "от 2 500 ₽" },
    { service: "Шиномонтаж (4 колеса)", price: "от 2 000 ₽" },
    { service: "Развал-схождение", price: "от 2 500 ₽" },
    { service: "Химчистка салона", price: "от 5 000 ₽" },
    { service: "Полировка кузова", price: "от 8 000 ₽" },
    { service: "Замена ремня ГРМ", price: "от 4 000 ₽" },
  ];

  const directions = [
    { icon: "Car", title: "Легковые автомобили", description: "Все виды работ для легковых авто" },
    { icon: "Truck", title: "Коммерческий транспорт", description: "Обслуживание микроавтобусов и фургонов" },
    { icon: "Zap", title: "Электромобили", description: "Специализированное обслуживание электрокаров" },
    { icon: "Shield", title: "Премиум-класс", description: "Работа с автомобилями премиум-сегмента" },
  ];

  const portfolio = [
    { image: "https://cdn.poehali.dev/projects/a070d2bd-d5ff-4764-9b6e-15be4cd67f71/files/5da46f33-869f-4063-8451-a5f53705eb40.jpg", title: "Ремонт подвески" },
    { image: "https://cdn.poehali.dev/projects/a070d2bd-d5ff-4764-9b6e-15be4cd67f71/files/54a489b8-194a-4105-9667-f5d2ef6241d9.jpg", title: "Детейлинг премиум" },
    { image: "https://cdn.poehali.dev/projects/a070d2bd-d5ff-4764-9b6e-15be4cd67f71/files/34adfbd8-5c25-4c32-aae8-6d27c9a9c529.jpg", title: "Диагностика двигателя" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Car" size={32} className="text-primary" />
              <span className="text-2xl font-bold">Din_avto</span>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection("hero")} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection("portfolio")} className="hover:text-primary transition-colors">Портфолио</button>
              <button onClick={() => scrollToSection("prices")} className="hover:text-primary transition-colors">Прайс</button>
              <button onClick={() => scrollToSection("directions")} className="hover:text-primary transition-colors">Направления</button>
              <button onClick={() => scrollToSection("contacts")} className="hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection("contacts")}>
              <Icon name="Phone" size={18} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Автосервис <span className="text-primary">Din_avto</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональное обслуживание и ремонт автомобилей любой сложности
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection("contacts")}>
              Записаться на сервис
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection("prices")}>
              <Icon name="FileText" size={20} className="mr-2" />
              Прайс-лист
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale cursor-pointer transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О нашем автосервисе</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Din_avto — это современный автосервис с многолетним опытом работы. Мы используем только оригинальные запчасти и профессиональное оборудование.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Опытные мастера</h3>
                    <p className="text-muted-foreground">Команда сертифицированных специалистов с опытом более 10 лет</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Современное оборудование</h3>
                    <p className="text-muted-foreground">Используем последние технологии диагностики и ремонта</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Гарантия качества</h3>
                    <p className="text-muted-foreground">Предоставляем гарантию на все виды работ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">2500+</div>
                <div className="text-muted-foreground">Довольных клиентов</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">12</div>
                <div className="text-muted-foreground">Лет опыта</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Видов услуг</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Техподдержка</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Наши работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden hover-scale cursor-pointer">
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Прайс-лист</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="divide-y">
                {prices.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-6 hover:bg-muted/50 transition-colors">
                    <span className="font-medium">{item.service}</span>
                    <span className="text-primary font-bold text-lg">{item.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <p className="text-center text-muted-foreground mt-6">
            * Точная стоимость работ определяется после диагностики
          </p>
        </div>
      </section>

      <section id="directions" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Направления работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {directions.map((direction, index) => (
              <Card key={index} className="text-center hover-scale cursor-pointer transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={direction.icon} size={32} className="text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{direction.title}</CardTitle>
                  <CardDescription>{direction.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <a href="tel:+79001234567" className="text-muted-foreground hover:text-primary transition-colors">+7 (900) 123-45-67</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:info@dinavto.ru" className="text-muted-foreground hover:text-primary transition-colors">info@dinavto.ru</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <p className="text-muted-foreground">г. Москва, ул. Автомобильная, д. 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <p className="text-muted-foreground">Пн-Пт: 8:00 - 20:00<br />Сб-Вс: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Записаться на сервис</CardTitle>
                <CardDescription>Оставьте заявку и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input type="tel" placeholder="Телефон" />
                <Input placeholder="Марка и модель авто" />
                <Textarea placeholder="Описание проблемы или желаемая услуга" rows={4} />
                <Button className="w-full">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Car" size={28} className="text-primary" />
                <span className="text-xl font-bold">Din_avto</span>
              </div>
              <p className="text-background/70">
                Профессиональный автосервис полного цикла
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-background/70">
                <li>Техническое обслуживание</li>
                <li>Диагностика</li>
                <li>Кузовной ремонт</li>
                <li>Детейлинг</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/70">
                <li>+7 (900) 123-45-67</li>
                <li>info@dinavto.ru</li>
                <li>г. Москва, ул. Автомобильная, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            © 2024 Din_avto. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
