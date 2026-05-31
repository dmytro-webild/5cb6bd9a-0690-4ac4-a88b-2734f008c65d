"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardFive from "@/components/sections/team/TeamCardFive";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import { Sparkles, Search, ArrowUpRight, Monitor, Shield, Zap, Puzzle, TrendingUp, Lock, Phone, MessageCircle, BookOpen, Tv, Camera, Music, Settings, Award, Users, Gamepad, Star, Heart, Bot, User, Target, Lightbulb, Calculator } from "lucide-react";

export default function WebAgency2Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="metallic"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          brandName="طاقادا ليرن"
          logoSrc="http://img.b2bpic.net/free-vector/vector-education-logo_779267-2083.jpg"
          logoAlt="Tagada Learn Logo"
        />
        <HeroSplitDoubleCarousel
          title="مرحبًا بك في طاقادا ليرن!"
          description="منصة التعلم التفاعلية والممتعة لأطفال تونس."
          tag="تعلم. العب. استكشف."
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "canvas-reveal" }}
          buttons={[
            { text: "ابدأ التعلم", href: "#subjects" },
            { text: "استكشف المواد", href: "#features" }
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/close-up-cartoon-character-boy-social-media_23-2150964445.jpg", imageAlt: "طفل يتعلم مع اللعب" },
            { imageSrc: "http://img.b2bpic.net/free-photo/children-s-art-class_23-2151994248.jpg", imageAlt: "أطفال يتفاعلون مع دروس ممتعة" },
            { imageSrc: "http://img.b2bpic.net/free-photo/3d-cartoon-back-school_23-2151676666.jpg", imageAlt: "فتاة تبتسم وتتعلم" },
            { imageSrc: "http://img.b2bpic.net/free-photo/top-view-two-kids-with-laptop-tablet_23-2147782800.jpg", imageAlt: "طفل يستخدم جهازًا لوحيًا للتعلم" }
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/boys-with-glasses-write-books-think-classroom_1150-24960.jpg", imageAlt: "ولد يحل مسألة رياضية" },
            { imageSrc: "http://img.b2bpic.net/free-photo/st-patrick-s-day-celebration-cartoon_23-2151929584.jpg", imageAlt: "أطفال يلعبون لعبة تعليمية" },
            { imageSrc: "http://img.b2bpic.net/free-photo/fun-penguin-3d-illustration_183364-123499.jpg", imageAlt: "شخصيات كرتونية تعليمية" },
            { imageSrc: "http://img.b2bpic.net/free-photo/front-view-kid-reading-portrait_23-2151532344.jpg", imageAlt: "فتاة تقرأ كتابًا رقميًا" }
          ]}
          carouselItemClassName="!aspect-[4/5]"
        />
        <FeatureBento
          title="المواد الرئيسية"
          description="اختر مادتك المفضلة وابدأ مغامرة التعلم!"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              title: "اللغة العربية",              description: "تعلّم لغتك الأم بأسلوب شيق وتفاعلي.",              bentoComponent: "reveal-icon",              icon: BookOpen,
              button: { text: "ابدأ بالعربية", href: "#" }
            },
            {
              title: "اللغة الفرنسية",              description: "اكتشف جمال اللغة الفرنسية بمتعة وسهولة.",              bentoComponent: "reveal-icon",              icon: BookOpen,
              button: { text: "ابدأ بالفرنسية", href: "#" }
            },
            {
              title: "اللغة الإنجليزية",              description: "أساسيات اللغة الإنجليزية لمستقبل مشرق.",              bentoComponent: "reveal-icon",              icon: BookOpen,
              button: { text: "ابدأ بالإنجليزية", href: "#" }
            },
            {
              title: "الرياضيات",              description: "أرقام ومفاهيم رياضية بطريقة مسلية ومبسطة.",              bentoComponent: "reveal-icon",              icon: Calculator,
              button: { text: "ابدأ بالرياضيات", href: "#" }
            }
          ]}
        />
        <FeatureCardTwentySix
          title="مميزات التعلم في طاقادا ليرن"
          description="نقدم لك تجربة تعليمية فريدة وممتعة!"
          textboxLayout="default"
          useInvertedBackground={false}
          cardClassName="!h-auto aspect-video"
          features={[
            {
              title: "دروس تفاعلية",              description: "محتوى تعليمي مصمم لجذب انتباه طفلك.",              imageSrc: "http://img.b2bpic.net/free-photo/excited-child-doing-viral-dance-choreography-apartment-illuminated-by-neon-lights_482257-76839.jpg",              imageAlt: "دروس تفاعلية",              buttonIcon: BookOpen,
              buttonHref: "#"
            },
            {
              title: "تمارين ممتعة",              description: "تحديات شيقة لتعزيز الفهم وتثبيت المعلومات.",              imageSrc: "http://img.b2bpic.net/free-photo/young-boy-playing-with-fidget-home_23-2149946720.jpg",              imageAlt: "تمارين ممتعة",              buttonIcon: Puzzle,
              buttonHref: "#"
            },
            {
              title: "اختبارات قصيرة",              description: "تقييم سريع ومحفز للتحقق من التقدم.",              imageSrc: "http://img.b2bpic.net/free-photo/expressive-young-man-posing-christmas_179666-5486.jpg",              imageAlt: "اختبارات قصيرة",              buttonIcon: Award,
              buttonHref: "#"
            },
            {
              title: "ألعاب تعليمية",              description: "تعلّم من خلال اللعب والمرح مع الأصدقاء.",              imageSrc: "http://img.b2bpic.net/free-photo/group-friends-searching-direction-mobile-phone_23-2147950671.jpg",              imageAlt: "ألعاب تعليمية",              buttonIcon: Gamepad,
              buttonHref: "#"
            },
            {
              title: "تتبع التقدم",              description: "مراقبة مستمرة لرحلة التعلم ونتائج الطفل.",              imageSrc: "http://img.b2bpic.net/free-photo/smiley-little-girl-home-online-school_23-2148827470.jpg",              imageAlt: "تتبع التقدم",              buttonIcon: TrendingUp,
              buttonHref: "#"
            },
            {
              title: "مكافآت وشارات",              description: "تحفيز مستمر لجهود طفلك.",              imageSrc: "http://img.b2bpic.net/free-photo/bottom-view-star-note-papers-rolled-up-sticky-notes-tied-with-rope-small-bucket-black-table_140725-106349.jpg",              imageAlt: "مكافآت وشارات",              buttonIcon: Star,
              buttonHref: "#"
            }
          ]}
        />
        <FeatureBento
          title="ميزات الذكاء الاصطناعي المتطورة"
          description="مساعدك الذكي لجعل التعلم أسهل وأكثر متعة."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              title: "معلم AI يشرح ببساطة",              description: "شروحات واضحة ومبسطة لأصعب الدروس.",              bentoComponent: "chat",              aiIcon: Bot,
              userIcon: User,
              exchanges: [
                { userMessage: "ما معنى الجاذبية يا معلم؟", aiResponse: "الجاذبية يا صغيري هي قوة تسحب الأشياء نحو بعضها البعض." },
                { userMessage: "هل كل شيء ينجذب؟", aiResponse: "نعم، كل شيء في الكون ينجذب لبعضه، لكن القوة تختلف حسب الكتلة والمسافة." }
              ],
              placeholder: "اسأل معلم AI هنا..."
            },
            {
              title: "شروحات مناسبة لعمر طفلك",              description: "محتوى يتكيف مع مستوى فهم طفلك واهتماماته.",              bentoComponent: "reveal-icon",              icon: Target
            },
            {
              title: "AI ينشئ أمثلة وتمارين تلقائية",              description: "المزيد من التدريب المخصص لطفلك لتعزيز الفهم.",              bentoComponent: "timeline",              heading: "تحدي اليوم",              subheading: "الرياضيات",              items: [
                { label: "حل 5 مسائل جمع", detail: "تم الإنجاز" },
                { label: "تعرّف على الأشكال الهندسية", detail: "جاري العمل" },
                { label: "لعبة الأرقام", detail: "قريباً" }
              ],
              completedLabel: "مكتمل"
            },
            {
              title: "AI يساعد في المواضيع الصعبة",              description: "دعم إضافي لطفلك لتجاوز أي عقبات تعليمية.",              bentoComponent: "orbiting-icons",              centerIcon: Lightbulb,
              items: [
                { icon: Monitor, ring: 1, duration: 15 },
                { icon: Shield, ring: 2, duration: 20 },
                { icon: Zap, ring: 3, duration: 25 },
                { icon: Puzzle, ring: 1, duration: 18 }
              ]
            },
            {
              title: "تفاعل صوتي ذكي",              description: "يمكن لطفلك التحدث مع المعلم الافتراضي والحصول على ردود.",              bentoComponent: "phone",              statusIcon: MessageCircle,
              alertIcon: Bot,
              alertTitle: "مكالمة المعلم الذكي",              alertMessage: "مساعدة في درس العلوم",              apps: [
                { name: "تحدث", icon: Phone },
                { name: "استمع", icon: Music },
                { name: "اسأل", icon: Lightbulb },
                { name: "أجب", icon: User },
                { name: "افهم", icon: BookOpen },
                { name: "شرح", icon: Bot },
                { name: "تكرار", icon: Tv },
                { name: "لعبة", icon: Gamepad }
              ]
            }
          ]}
        />
        <TestimonialCardFifteen
          testimonial="لقد تغيرت طريقة تعلم ابني تمامًا مع طاقادا ليرن! الدروس ممتعة ومعلم الذكاء الاصطناعي رائع حقًا."
          rating={5}
          author="— أم فاطمة، تونس"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/young-handsome-man-beige-turtleneck-smiling-cheerfully-showing-teeth_141793-54841.jpg", alt: "أم فاطمة" },
            { src: "http://img.b2bpic.net/free-photo/3d-cartoon-character_23-2151021955.jpg", alt: "الطفلة فاطمة" }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
        <MetricCardOne
          title="لماذا يفضل الآباء والأطفال طاقادا ليرن؟"
          description="أرقام تتحدث عن نفسها في عالم التعليم التفاعلي."
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "students", value: "10000+", title: "طالب نشط", description: "يستمتعون بالتعلم يومياً", icon: Users },
            { id: "lessons", value: "500+", title: "درس تفاعلي", description: "محتوى تعليمي متنوع وشيق", icon: BookOpen },
            { id: "engagement", value: "95%", title: "نسبة تفاعل", description: "الأطفال يتفاعلون ويستفيدون", icon: Heart }
          ]}
        />
        <FeatureCardSixteen
          title="لماذا تختار طاقادا ليرن لطفلك؟"
          description="طريقتنا المبتكرة في التعليم تحدث فرقًا حقيقيًا."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          negativeCard={{
            items: [
              "دروس مملة وغير مشجعة",              "صعوبة في فهم المفاهيم",              "محتوى غير تفاعلي",              "لا يوجد تتبع للتقدم",              "غياب المتعة في التعلم"
            ]
          }}
          positiveCard={{
            items: [
              "دروس تفاعلية وممتعة للغاية",              "شروحات AI مبسطة ومناسبة للعمر",              "محتوى غني بالألعاب والتمارين",              "تتبع دقيق لتقدم الطفل",              "تحويل التعلم إلى مغامرة محببة"
            ]
          }}
        />
        <TeamCardFive
          title="معلموك الأذكياء في طاقادا ليرن"
          description="شخصيات ذكاء اصطناعي مخصصة لمساعدة طفلك على التفوق."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          mediaClassName="object-[65%_center]"
          team={[
            { id: "1", name: "المعلمة سارة", role: "خبيرة اللغة العربية", imageSrc: "http://img.b2bpic.net/free-photo/close-up-kids-learning-together_23-2148888865.jpg", imageAlt: "المعلمة سارة" },
            { id: "2", name: "البروفيسور ماثيو", role: "عبقري الرياضيات", imageSrc: "http://img.b2bpic.net/free-photo/3d-cartoon-back-school_23-2151676615.jpg", imageAlt: "البروفيسور ماثيو" },
            { id: "3", name: "الآنسة ليلى", role: "دليلة اللغات الأجنبية", imageSrc: "http://img.b2bpic.net/free-photo/view-3d-courtroom-scene-lawyer-s-day-celebration_23-2151023346.jpg", imageAlt: "الآنسة ليلى" }
          ]}
        />
        <FaqBase
          title="أسئلة شائعة حول طاقادا ليرن"
          description="كل ما تحتاج معرفته عن منصتنا التعليمية."
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            { id: "1", title: "ما هي الفئات العمرية التي تستهدفها طاقادا ليرن؟", content: "تستهدف طاقادا ليرن الأطفال الذين تتراوح أعمارهم بين 4 و 12 عامًا، وتوفر محتوى تعليميًا مناسبًا لكل مرحلة عمرية." },
            { id: "2", title: "هل المحتوى التعليمي متوافق مع المناهج التونسية؟", content: "نعم، تم تصميم المحتوى التعليمي ليتوافق مع المناهج الدراسية التونسية، مع التركيز على التفاعل والابتكار." },
            { id: "3", title: "كيف يساعد معلم الذكاء الاصطناعي طفلي؟", content: "يقوم معلم الذكاء الاصطناعي بتقديم الشروحات المبسطة، والإجابة على الأسئلة، وإنشاء تمارين مخصصة لمساعدة طفلك على فهم الدروس الصعبة." },
            { id: "4", title: "هل يمكنني تتبع تقدم طفلي في التعلم؟", content: "بالتأكيد! توفر المنصة لوحة تحكم للآباء تتيح لهم متابعة تقدم أطفالهم، الأنشطة المكتملة، والمكافآت التي حصلوا عليها." },
            { id: "5", title: "هل طاقادا ليرن آمنة للأطفال؟", content: "نعم، سلامة أطفالك هي أولويتنا القصوى. المنصة خالية من الإعلانات ومحتواها مناسب تمامًا للفئة العمرية المستهدفة." }
          ]}
        />
        <ContactCTA
          tag="ابدأ الآن"
          title="هل أنت مستعد لمستقبل تعليمي مشرق لطفلك؟"
          description="انضم إلى آلاف العائلات التونسية التي اختارت طاقادا ليرن لرحلة تعلم ممتعة وفعالة."
          background={{ variant: "rotated-rays-animated" }}
          buttons={[
            { text: "سجل الآن", href: "#contact" },
            { text: "جرب مجاناً", href: "#try-free" }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
        <FooterBase
          logoText="طاقادا ليرن"
          copyrightText="© 2024 | طاقادا ليرن. جميع الحقوق محفوظة."
          columns={[
            {
              title: "الشركة",              items: [
                { label: "عنا", href: "#about" },
                { label: "المواد", href: "#subjects" },
                { label: "المميزات", href: "#features" },
                { label: "اتصل بنا", href: "#contact" }
              ]
            },
            {
              title: "المواد",              items: [
                { label: "اللغة العربية", href: "#" },
                { label: "الفرنسية", href: "#" },
                { label: "الإنجليزية", href: "#" },
                { label: "الرياضيات", href: "#" }
              ]
            },
            {
              title: "تواصل معنا",              items: [
                { label: "تويتر", href: "#" },
                { label: "لينكد إن", href: "#" },
                { label: "انستغرام", href: "#" },
                { label: "دريبل", href: "#" }
              ]
            }
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
