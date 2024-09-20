import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './modal.css';

function ReservModal({ onClose, reservation,hospitalName,hospitalPn }) {
  const [formData, setFormData] = useState({
    username: '',
    pn: '',
    date: '',
    dog: false,
    cat: false,
    etc: false,
    descriptionR: '',
    hosp_name: hospitalName,
    hosp_pn: hospitalPn,
  });

  const [userid, setUserid] = useState(null); // 로그인한 사용자 ID 저장
  const [isEdit, setIsEdit] = useState(false); // 수정 여부 확인

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setUserid(decodedToken.userid);
    }
    if (reservation) {
      // 전달받은 예약 데이터로 formData를 설정
      setFormData({
        username: reservation.username,
        pn: reservation.pn,
        date: reservation.date,
        dog: reservation.dog,
        cat: reservation.cat,
        etc: reservation.etc,
        descriptionR: reservation.descriptionr,
        hosp_name: reservation.hosp_name,
        hosp_pn: reservation.hosp_pn,
      });
      setIsEdit(true); // 수정 모드로 설정
    }
  }, [reservation]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (isEdit) {
        // 예약 수정
        await axios.patch(
          `${secrets.REACT_APP_MY_DOMAIN}/update_reserv/${reservation.reserv_idx}`,
          {
            ...formData,
            userid,
          }
        );
        alert('예약이 수정되었습니다.');
      } else {
        // 새로운 예약
        await axios.post(`${secrets.REACT_APP_MY_DOMAIN}/post_reserv`, {
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

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  let availabaleDay = `${year}-${month}-${day}`;

  return (
    <div className="modal font-Kr">
    <div className="modal-content min-h-[476px] max-w-[550px] p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold pb-5 text-center">
        {isEdit ? '예약 수정' : '예약하기'}
      </h2>
      <div>
        <h2 className="font-semibold text-lg pb-5 text-center">
          {formData.hosp_name}
        </h2>
        <form className="flex flex-col space-y-4">
          <div className="inputLabel">
            <div className="mb-4">
              <label className="font-medium">이름</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4a90e2]"
              />
            </div>
            <div className="mb-4">
              <label className="font-medium">전화번호</label>
              <input
                type="text"
                name="pn"
                value={formData.pn}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4a90e2]"
              />
            </div>
            <div className="mb-4">
              <label className="font-medium">방문일자</label>
              <input
                type="date"
                name="date"
                min={availabaleDay}
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4a90e2]"
              />
            </div>
  
     
            <div className="checkbox flex items-center justify-between mb-4">
              <label className="font-medium">
                <input
                  type="checkbox"
                  name="dog"
                  checked={formData.dog}
                  onChange={handleChange}
                  className="mr-2"
                />
                강아지
              </label>
              <label className="font-medium">
                <input
                  type="checkbox"
                  name="cat"
                  checked={formData.cat}
                  onChange={handleChange}
                  className="mr-2"
                />
                고양이
              </label>
              <label className="font-medium">
                <input
                  type="checkbox"
                  name="etc"
                  checked={formData.etc}
                  onChange={handleChange}
                  className="mr-2"
                />
                기타
              </label>
            </div>

            <div className="mb-4">
              <label className="font-medium">진료내용</label>
              <textarea
                name="descriptionR"
                value={formData.descriptionR}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4a90e2] h-[100px]"
              ></textarea>
            </div>
          </div>
 
          <div className="modal-actions flex justify-end space-x-4">
            <button
              className="px-4 py-2 bg-[#4a90e2] text-white rounded-lg hover:bg-[#357abd] transition-colors"
              type="button"
              onClick={handleSubmit}
            >
              {isEdit ? '수정하기' : '예약하기'}
            </button>
            <button
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-colors"
              type="button"
              onClick={onClose}
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  
  );
}

export default ReservModal;
