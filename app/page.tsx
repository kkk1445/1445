export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              혁신적인 솔루션을 제공하는<br />
              최고의 기업
            </h1>
            <p className="mt-6 text-xl">
              고객의 성공을 위해 최선을 다하는 우리의 약속
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">혁신적인 기술</h3>
              <p className="text-gray-600">
                최신 기술을 활용하여 고객에게 최상의 서비스를 제공합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">전문적인 서비스</h3>
              <p className="text-gray-600">
                경험 많은 전문가들이 최고의 솔루션을 제공합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">고객 중심</h3>
              <p className="text-gray-600">
                고객의 요구사항을 최우선으로 생각합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
