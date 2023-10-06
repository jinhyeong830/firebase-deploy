/** @format */
import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';

export function DatabaseTest() {
  const [users, setUsers] = useState([]);
  const [number, setNumber] = useState(0);

  //   create 에 필요한 state
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [newGender, setNewGender] = useState('');

  // 두 번째 인자의 문자열은 firestore에 설정해둔 collection 의 이름
  const usersCollection = collection(db, 'User');
  /* User Collection 에는
  - userName, phoneNumber, gender라는 값이 있다고 가정합니다.
  */

  /* READ, 가져오기 */
  const getUsers = async () => {
    const data = await getDocs(usersCollection); //READ - getDocs 이용
    //   console.log(data);

    setUsers(
      data.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      })
    );
  };
  //   useEffect를 이용해서 렌더링될 때마다 실행되지 않도록
  useEffect(() => {
    getUsers();
    console.log('test');
    console.log(users.length);
    /* 
    (진형) 나중 삭제 
    users 를 넣지 않고 생성 버튼 눌렀을 때 바로 적용할 수 있는 방법이 있을ㄲ  ㅏ?
    새로 받아와서 
    
    */
  }, []);

  /* CREATE, 생성 */
  const createUser = async () => {
    const newData = {
      userName: newName,
      phoneNumber: newPhoneNumber,
      gender: newGender === '남' ? true : false,
    };
    const newDoc = doc(db, usersCollection, 'new-ID');
    // console.log(newDoc);
    /* addDoc( , ) */
    // 첫번째 인자: 어떤 collection에 추가할지
    // 두번째 인자: 해당 collection에 추가할 정보
    await addDoc(usersCollection, newData);

    /* setDoc(doc(...), ) */
    // 첫번째 인자: doc() 을 이용해 collection과 추가할 id 정보
    // 두번째 인자: collection에 추가할 정보
    // await setDoc(newDoc, newData);
  };

  /* UPDATE, 수정 */
  const updateUser = async (id, name) => {
    // User collection 에서 id
    const userDoc = doc(db, 'User', id);
    const updateField = { userName: name };
    await updateDoc(userDoc, updateField);
  };

  /* DELETE, 삭제 */
  const deleteUser = async (id) => {
    const delDoc = doc(db, 'User', id);
    await deleteDoc(delDoc);
  };

  return (
    <>
      <h1>firebase Database CRUD test</h1>
      {/* users는 배열인 state입니다. */}
      {users.map((el) => {
        return (
          <div key={el.id}>
            <h3>name {el.userName}</h3>
            <h3>phone {el.phoneNumber}</h3>
            <h3>gender {el.gender ? '남' : '여'}</h3>
            <button onClick={() => deleteUser(el.id)}>삭제하기</button>
          </div>
        );
      })}

      <input
        type="text"
        placeholder="이름"
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        type="phoneNumber"
        placeholder="010-xxxx-xxxx"
        onChange={(event) => {
          setNewPhoneNumber(event.target.value);
        }}
      />
      <input
        type="gender"
        placeholder="남/여 로만 써주세요"
        onChange={(event) => {
          setNewGender(event.target.value);
        }}
      />

      {/* user 생성 버튼입니다. */}
      <button
        onClick={() => {
          if (newGender === '남' || newGender === '여') {
            createUser();
          } else {
            alert('성별을 남/여 중 하나로만 작성해주세요.');
          }
        }}
      >
        Create User
      </button>
      <hr />
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>button</button>
    </>
  );
}
