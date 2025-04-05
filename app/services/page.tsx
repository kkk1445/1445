export default function Services() {
  const services = [
    {
      title: '웹 개발',
      description: '최신 기술을 활용한 맞춤형 웹사이트 개발 서비스를 제공합니다.',
      features: ['반응형 디자인', 'SEO 최적화', '성능 최적화'],
    },
    {
      title: '모바일 앱 개발',
      description: 'iOS와 Android 플랫폼을 위한 네이티브 앱 개발 서비스를 제공합니다.',
      features: ['iOS 개발', 'Android 개발', '크로스 플랫폼 개발'],
    },
    {
      title: '컨설팅',
      description: '기술 전략 수립과 디지털 전환을 위한 전문 컨설팅 서비스를 제공합니다.',
      features: ['기술 전략 수립', '디지털 전환 지원', '프로세스 최적화'],
    },
  ];

  return (
    <main className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">서비스</h1>
          <p className="text-xl text-gray-600">
            고객의 비즈니스 성장을 위한 최적의 솔루션
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-blue-500 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 