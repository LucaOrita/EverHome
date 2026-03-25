import { useState } from 'react';
import StatusBar from '../components/layout/StatusBar';
import Button from '../components/ui/Button';
import { useTranslation } from '../i18n/LanguageContext';
import { ClipboardCheck, Wrench, ShieldCheck } from 'lucide-react';

const slideIcons = [ClipboardCheck, Wrench, ShieldCheck];
const slideKeys = ['assess', 'adapt', 'assure'];

export default function HowItWorks({ onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  const slides = slideKeys.map((key, i) => ({
    icon: slideIcons[i],
    title: t(`howItWorks.${key}Title`),
    description: t(`howItWorks.${key}Desc`),
  }));

  const isLast = currentSlide === slides.length - 1;
  const slide = slides[currentSlide];
  const SlideIcon = slide.icon;

  return (
    <div className="flex flex-col min-h-full bg-bg-page">
      <StatusBar variant="dark" />

      <div className="flex-1 flex flex-col items-center justify-center px-sp-6">
        {/* Step indicator */}
        <p className="text-xs uppercase text-text-secondary tracking-wide font-semibold">
          {currentSlide + 1} / {slides.length}
        </p>

        {/* Icon */}
        <div
          className="animate-fade-in mt-sp-8 bg-primary-dark rounded-full flex items-center justify-center"
          style={{ width: 100, height: 100 }}
          key={currentSlide}
        >
          <SlideIcon size={44} className="text-white" />
        </div>

        {/* Title */}
        <h2 className="animate-fade-in-d200 text-h1 text-primary-dark text-center mt-sp-6 font-heading">
          {slide.title}
        </h2>

        {/* Description */}
        <p className="animate-fade-in-d400 text-body text-text-secondary text-center mt-sp-4 leading-relaxed">
          {slide.description}
        </p>

        {/* Dots */}
        <div className="flex items-center gap-sp-2 mt-sp-8">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? 'bg-primary-dark w-8 h-2'
                  : 'bg-border-light w-2 h-2'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="px-sp-6 mb-sp-12">
        <Button
          variant="primary"
          onClick={() => {
            if (isLast) {
              onNavigate?.('login-email');
            } else {
              setCurrentSlide((prev) => prev + 1);
            }
          }}
        >
          {t('common.continue')}
        </Button>

        {/* Skip */}
        {!isLast && (
          <button
            onClick={() => onNavigate?.('login-email')}
            className="w-full text-center mt-sp-4 text-sm text-text-link font-semibold cursor-pointer hover:underline"
          >
            {t('common.skip')}
          </button>
        )}
      </div>
    </div>
  );
}
