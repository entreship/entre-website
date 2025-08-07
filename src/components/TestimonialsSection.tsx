import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote, Star } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const TestimonialsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const testimonials = [
    {
      type: 'founder',
      name: 'Rahul Sharma',
      role: 'Co-founder @ TechVentures',
      avatar: '👨‍💻',
      rating: 5,
      quote: "Found my CTO through EntreShip's matching system. We raised $500k within 6 months and now have a team of 15. The ecosystem is incredible!",
      highlight: 'Raised $500k',
      gradient: 'from-primary-600 to-primary-500'
    },
    {
      type: 'student',
      name: 'Priya Patel',
      role: 'Full-Stack Developer @ Microsoft',
      avatar: '👩‍💻',
      rating: 5,
      quote: "Started as an intern on 3 projects, built my portfolio, and landed my dream job at Microsoft. EntreShip changed my career trajectory completely.",
      highlight: 'From intern to Microsoft',
      gradient: 'from-accent-cyan to-accent-blue'
    },
    {
      type: 'employer',
      name: 'David Chen',
      role: 'Hiring Manager @ Google',
      avatar: '👨‍💼',
      rating: 5,
      quote: "The quality of candidates from EntreShip is exceptional. They come with real project experience and verified skills. It's our go-to talent pipeline.",
      highlight: 'Best talent pipeline',
      gradient: 'from-accent-yellow to-accent-mint'
    },
    {
      type: 'founder',
      name: 'Sarah Johnson',
      role: 'CEO @ HealthTech Pro',
      avatar: '👩‍⚕️',
      rating: 5,
      quote: "The co-founder matching algorithm is spot on. Found 2 co-founders who complemented my skills perfectly. We're now serving 10,000+ users.",
      highlight: '10,000+ users',
      gradient: 'from-primary-400 to-primary-500'
    }
  ]

  return (
    <section className="py-20 section-padding" ref={ref}>
      <div className="max-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="text-white">Success</span>{' '}
            <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real people, real transformations, real impact
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-white/30',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-gradient-to-r from-primary-600 to-primary-500'
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <div className="glass rounded-2xl p-6 h-full flex flex-col group hover:scale-105 transition-transform duration-300">
                  {/* Quote icon */}
                  <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${testimonial.gradient} self-start mb-4 opacity-20`}>
                    <Quote className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <blockquote className="text-gray-300 mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Highlight */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${testimonial.gradient} bg-opacity-10 mb-4 self-start`}>
                    <span className="text-sm font-semibold gradient-text">{testimonial.highlight}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent-yellow text-accent-yellow" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Be part of the next success story</p>
          <div className="flex justify-center gap-4">
            <motion.a
              href="#ecosystem"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-gradient-primary text-white font-semibold inline-block"
            >
              Explore Our Platforms
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection