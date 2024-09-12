import React from 'react'
import PageTitle from '../PageTitle'

const About = () => {
  return (
    <div className='container mx-auto px-4 py-8'> {/* 패딩을 추가하여 위아래 여백 조정 */}
      <PageTitle title="About" className="px-7" />
      <div className='bg-white w-full rounded-lg shadow-lg'> {/* 그림자 조정 */}
        <div className="flex flex-col items-center bg-[#f1f3ea] py-10 px-6 md:px-10 rounded-lg h-full font-Kr text-center"> {/* 상하/좌우 패딩 조정 */}
          <h2 className='text-start font-En font-bold text-2xl md:text-4xl py-4 md:py-6'>About HappyPet</h2> {/* 텍스트 상하 간격 조정 */}
          
          <div className='w-full md:w-[70%] text-start space-y-6'> {/* 텍스트 블록 사이 간격 조정 */}
            <h4 className='font-bold text-lg md:text-xl pb-1 pl-3'>환영합니다!</h4>
            <p className='pb-4 md:pb-6'>해피펫(HappyPet)은 반려동물 보호자들이 신뢰할 수 있는 동물병원을 쉽게 찾을 수 있도록 돕기 위해 설립된 플랫폼입니다...</p>

            <h4 className='font-bold text-xl md:text-2xl pb-3'>우리의 이야기</h4>
            <p className='pb-4 md:pb-6'>해피펫은 2023년, 반려동물을 사랑하는 몇몇 열정적인 보호자들에 의해 시작되었습니다...</p>

            <h4 className='font-bold text-xl md:text-2xl pb-3'>우리의 서비스</h4>
            <p className='pb-2'>해피펫은 동물병원 중개 플랫폼으로서 다음과 같은 주요 기능을 제공합니다.</p>

            <ul className='pb-6 list-disc pl-5 md:pl-8 space-y-2'> {/* 리스트 간 간격 추가 */}
              <li>맞춤형 병원 검색: 보호자의 지역, 병원의 전문 분야, 진료 시간 등 다양한 조건에 따라 맞춤형 검색 결과를 제공합니다.</li>
              <li>실시간 리뷰 및 평가: 실제 이용자들의 리뷰와 평점을 통해 병원의 신뢰성을 확인할 수 있습니다.</li>
              <li>온라인 예약 시스템: 병원 예약을 쉽게 할 수 있어 보호자들이 더 편리하게 반려동물의 건강 관리를 할 수 있습니다.</li>
            </ul>

            <h4 className='font-bold text-xl md:text-2xl pb-3'>신뢰할 수 있는 파트너십</h4>
            <p className='pb-4 md:pb-6'>해피펫은 신뢰할 수 있는 동물병원들과의 파트너십을 통해 보호자들에게 최상의 의료 서비스를 제공합니다...</p>

            {/* 이하 내용도 동일한 방식으로 적용 */}
            <h4 className='font-bold text-xl md:text-2xl pb-3'>보호자 중심의 서비스 철학</h4>
            <p className='pb-4 md:pb-6'>해피펫은 반려동물과 보호자 간의 유대가 그 무엇과도 비교할 수 없는 특별한 관계임을 알고 있습니다...</p>

            <h4 className='font-bold text-xl md:text-2xl pb-3'>투명성과 안전성</h4>
            <p className='pb-4 md:pb-6'>해피펫은 사용자 정보의 보안을 최우선으로 생각하며, 모든 데이터는 안전하게 관리됩니다...</p>

            <h4 className='font-bold text-xl md:text-2xl pb-3'>커뮤니티와 리소스</h4>
            <p className='pb-4 md:pb-6'>해피펫은 반려동물 보호자들에게 유용한 정보를 제공하는 다양한 리소스를 제공합니다...</p>

            <h4 className='font-bold text-xl md:text-2xl pb-3'>문의 및 지원</h4>
            <p className='pb-4 md:pb-6'>해피펫을 이용해 주셔서 감사합니다! 궁금한 사항이 있으면 언제든지 연락 주세요...</p>

            <h4 className='font-semibold text-lg md:text-xl pb-2'>문의:</h4>
            <ul className='space-y-2'> {/* 문의 사항 간격 추가 */}
              <li>이메일: <a href="mailto:support@happypet.com" className='font-semibold text-cyan-700'>support@happypet.com</a></li>
              <li>전화: 123-456-7890</li>
              <li>운영 시간: 월-금, 9AM - 6PM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
