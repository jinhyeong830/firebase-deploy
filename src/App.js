/** @format */
import ham1 from './assets/src_hamster.png';
import { DatabaseTest } from './components/DatabaseTest';
function App() {
  return (
    <>
      <h1>firebase 배포 테스트</h1>
      <img src={ham1} alt='src 햄' width={200} />
      <img src={`${process.env.PUBLIC_URL}/assets/public_hamster.png`} alt='public 햄스터1' width={200} />
      <img src='/assets/public_hamster.png' alt='public 햄스터2' width={200} />

      {/* CRUD는 DatabaseTest 컴포넌트에서 확인하세요!  */}
      <DatabaseTest />
    </>
  );
}

export default App;
