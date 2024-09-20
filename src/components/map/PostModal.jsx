import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './modal.css';

function PostModal({ onClose, post,hospitalName,hospitalPn }) {
  const [formData, setFormData] = useState({
    username: '',
    pn: '',
    descriptionI: '',
    hosp_name: hospitalName,
    hosp_pn: hospitalPn,
  });
  const [userid, setUserid] = useState(null);
  const [isEdit, setIsEdit] = useState(false); // 수정 여부

  // useEffect를 통해 컴포넌트가 마운트될 때 userid 설정 및 초기 데이터설정
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1])); // JWT 디코딩
      setUserid(decodedToken.userid);
    }

    // post가 존재할 경우 기존 데이터를 formData에 세팅
    if (post) {
      setFormData({
        username: post.username,
        pn: post.pn,
        descriptionI: post.descriptioni,
        hosp_name: post.hosp_name,
        hosp_pn: post.hosp_pn,
      });
      setIsEdit(true); // 수정 모드로 설정
    }
  }, [post]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    // 유효성 검사: 필수 필드 확인
    if (!formData.username || !formData.pn || !formData.descriptionI) {
      alert('모든 필수 필드를 입력해주세요.');
      return;
    }

    try {
      if (isEdit) {
        // 예약 수정
        await axios.patch(`https://happypetbackend.geonnim.com/update_inq/${post.inq_idx}`, {
          ...formData,
          userid,
        });
        alert('예약이 수정되었습니다.');
      } else {
        // 새로운 예약
        await axios.post(`https://happypetbackend.geonnim.com/post_inq`, {
          ...formData,
          userid,
        });
        alert('예약이 성공적으로 완료되었습니다.');
      }
      onClose(); // 모달 닫기
      window.location.reload(); // 페이지 새로고침
    } catch (error) {
      console.error('예약 실패:', error);
      alert('예약 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[10000]">

  <div
    className="fixed inset-0 bg-black opacity-50"
    onClick={onClose}
  ></div>


  <div className="relative bg-white text-xl p-6 rounded-lg w-full max-w-[500px] shadow-lg z-10 font-Kr">
    <h2 className="font-Kr font-bold mb-6 text-2xl text-center">
      {isEdit ? '문의 수정' : 'Contact Us'}
    </h2>

    <input
      type="text"
      placeholder="이름을 입력하세요"
      name="username"
      value={formData.username}
      onChange={handleChange}
      className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:border-[#4a90e2] focus:outline-none transition-colors"
    />

    <input
      type="tel"
      placeholder="연락처를 입력하세요"
      name="pn"
      value={formData.pn}
      onChange={handleChange}
      className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:border-[#4a90e2] focus:outline-none transition-colors"
    />

    <textarea
      placeholder="문의 내용을 입력하세요."
      name="descriptionI"
      value={formData.descriptionI}
      onChange={handleChange}
      className="w-full h-[180px] p-3 mb-4 border border-gray-300 rounded-lg focus:border-[#4a90e2] focus:outline-none transition-colors"
    ></textarea>

    <div className="flex justify-end">
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-[#4a90e2] text-white text-lg rounded-lg hover:bg-[#357abd] transition-colors mr-2"
      >
        {isEdit ? '수정하기' : '문의하기'}
      </button>
      <button
        onClick={onClose}
        className="px-4 py-2 bg-gray-300 text-gray-800 text-lg rounded-lg hover:bg-gray-400 transition-colors"
      >
        닫기
      </button>
    </div>
  </div>
</div>

  );
}

export default PostModal;
