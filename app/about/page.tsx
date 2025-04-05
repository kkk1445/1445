export default function About() {
  return (
    <main className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">회사 소개</h1>
          <p className="text-xl text-gray-600">
            혁신과 성장을 추구하는 우리의 이야기
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">우리의 비전</h2>
            <p className="text-gray-600 mb-6">
              우리는 기술 혁신을 통해 더 나은 미래를 만들어갑니다.
              고객의 성공을 위해 최선을 다하며, 지속 가능한 가치를 창출합니다.
            </p>
            <h2 className="text-2xl font-semibold mb-4">우리의 미션</h2>
            <p className="text-gray-600">
              최고의 서비스와 솔루션을 제공하여 고객의 비즈니스 성장을 돕습니다.
              우리는 항상 고객 중심의 접근 방식을 유지하며, 신뢰할 수 있는 파트너가 되기 위해 노력합니다.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">회사 연혁</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">2023</h3>
                <p className="text-gray-600">신규 서비스 출시</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">2022</h3>
                <p className="text-gray-600">회사 설립</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 