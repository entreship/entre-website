import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Award, Calendar, Building, User, Briefcase, Star, 
  CheckCircle, XCircle, Download, Share2, Shield,
  Clock, Target, MessageSquare, ExternalLink
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GlassCard from '../components/common/GlassCard'
import GradientButton from '../components/common/GradientButton'

interface Certificate {
  certificateId: string
  studentName: string
  college: string
  role: string
  startDate: string
  endDate: string
  duration: string
  skills: string[]
  projectName: string
  projectClient: string
  performanceRating: number
  feedback: string
  mentorName: string
  mentorDesignation: string
  issueDate: string
  verified: boolean
}

const CertificateVerification: React.FC = () => {
  const { certificateId } = useParams<{ certificateId: string }>()
  const [certificate, setCertificate] = useState<Certificate | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const response = await fetch('/certificates.json')
        const data = await response.json()
        
        if (certificateId && data.certificates[certificateId]) {
          setCertificate(data.certificates[certificateId])
        } else {
          setError(true)
        }
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchCertificate()
  }, [certificateId])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-gray-300">Verifying certificate...</p>
        </div>
      </div>
    )
  }

  if (error || !certificate) {
    return (
      <div className="min-h-screen bg-dark">
        <Navbar />
        <div className="flex items-center justify-center min-h-[80vh] section-padding">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="inline-flex p-6 rounded-full bg-red-500/20 mb-6">
              <XCircle className="w-16 h-16 text-red-500" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Certificate Not Found</h1>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              The certificate ID <span className="font-mono text-accent-cyan">{certificateId}</span> could not be found in our system. 
              Please check the ID and try again.
            </p>
            <Link to="/">
              <GradientButton>Back to Home</GradientButton>
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      
      {/* Hero Section with Certificate Status */}
      <section className="pt-32 pb-10 section-padding relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />
        </div>

        <div className="max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            {/* Verification Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass mb-8"
            >
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-lg font-semibold text-white">Verified Certificate</span>
              <Shield className="w-5 h-5 text-accent-cyan" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-space font-bold mb-4">
              <span className="gradient-text">Certificate of Completion</span>
            </h1>
            <p className="text-lg text-gray-300">
              EntreShip Internship Program
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certificate Details */}
      <section className="py-10 section-padding">
        <div className="max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-600/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent-cyan/20 to-transparent rounded-full blur-3xl" />

            {/* Certificate Header */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-8 h-8 text-accent-cyan" />
                    <h2 className="text-3xl font-bold">{certificate.studentName}</h2>
                  </div>
                  <div className="flex flex-wrap gap-4 text-gray-400">
                    <span className="flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      {certificate.college}
                    </span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <p className="text-sm text-gray-400">Certificate ID</p>
                  <p className="font-mono text-lg font-bold gradient-text">{certificate.certificateId}</p>
                  <p className="text-sm text-gray-400 mt-1">Issued: {formatDate(certificate.issueDate)}</p>
                </div>
              </div>

              {/* Main Details Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Role */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase className="w-5 h-5 text-primary-500" />
                      <h3 className="text-lg font-semibold">Role</h3>
                    </div>
                    <p className="text-xl text-white">{certificate.role}</p>
                  </div>

                  {/* Duration */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-5 h-5 text-primary-500" />
                      <h3 className="text-lg font-semibold">Internship Duration</h3>
                    </div>
                    <p className="text-gray-300">
                      {formatDate(certificate.startDate)} - {formatDate(certificate.endDate)}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      <Clock className="w-3 h-3 inline mr-1" />
                      {certificate.duration}
                    </p>
                  </div>

                  {/* Project */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-5 h-5 text-primary-500" />
                      <h3 className="text-lg font-semibold">Project</h3>
                    </div>
                    <p className="text-white">{certificate.projectName}</p>
                    <p className="text-sm text-gray-400 mt-1">Client: {certificate.projectClient}</p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Skills */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-5 h-5 text-primary-500" />
                      <h3 className="text-lg font-semibold">Skills Developed</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {certificate.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full bg-gradient-to-r from-primary-600/20 to-primary-500/20 text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Performance Rating */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-5 h-5 text-primary-500" />
                      <h3 className="text-lg font-semibold">Performance Rating</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-6 h-6 ${
                            i < certificate.performanceRating
                              ? 'fill-accent-yellow text-accent-yellow'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-lg font-semibold">{certificate.performanceRating}/5</span>
                    </div>
                  </div>

                  {/* Mentor */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <User className="w-5 h-5 text-primary-500" />
                      <h3 className="text-lg font-semibold">Mentor</h3>
                    </div>
                    <p className="text-white">{certificate.mentorName}</p>
                    <p className="text-sm text-gray-400">{certificate.mentorDesignation}</p>
                  </div>
                </div>
              </div>

              {/* Feedback Section */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="w-5 h-5 text-primary-500" />
                  <h3 className="text-lg font-semibold">Feedback & Remarks</h3>
                </div>
                <div className="glass rounded-xl p-6 bg-gradient-to-br from-primary-600/5 to-accent-cyan/5">
                  <p className="text-gray-300 leading-relaxed italic">"{certificate.feedback}"</p>
                  <div className="mt-4 text-right">
                    <p className="text-sm text-gray-400">— {certificate.mentorName}</p>
                    <p className="text-xs text-gray-500">{certificate.mentorDesignation}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-center pt-8 border-t border-white/10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10"
                  onClick={() => window.print()}
                >
                  <Download className="w-5 h-5" />
                  Download Certificate
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href)
                    alert('Verification link copied to clipboard!')
                  }}
                >
                  <Share2 className="w-5 h-5" />
                  Share Verification
                </motion.button>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-white"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Share on LinkedIn
                  </motion.button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Verification Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-center"
          >
            <GlassCard className="inline-block">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-500" />
                <div className="text-left">
                  <p className="font-semibold">Digitally Verified</p>
                  <p className="text-sm text-gray-400">
                    This certificate is authentic and issued by EntreShip
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CertificateVerification