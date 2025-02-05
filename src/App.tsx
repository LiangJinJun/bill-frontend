import FollowList from '@/pages/Community/FollowList';
import { useEffect } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useAppDispatch } from '@/store/hooks';
import { setUserInfo } from '@/store/slice';
import { LoginGuard } from '@/components';
import Community from '@/pages/Community';
import Detail from '@/pages/Detail';
import NotFound from '@/pages/NotFound';
import PostTopic from '@/pages/PostTopic';
import Sign from '@/pages/Sign';
import FirstScreen from '@/pages/FirstScreen';
import Login from '@/pages/Login';
import Mine from '@/pages/Mine';
import UserInfo from '@/pages/UserInfo';
import Password from '@/pages/Password';
import Bookkeeping from '@/pages/Bookkeeping';
import TopicDetail from '@/pages/TopicDetail';
import CateGory from '@/pages/Bookkeeping/CategorySettings';
import Editing from '@/pages/Detail_editing';
import Personal from '@/pages/Community/Personal';
import Share from '@/pages/Share';
import Message from '@/pages/Message';

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) dispatch(setUserInfo(JSON.parse(userInfo)));
  }, []);

  return (
    <Router>
      <FirstScreen />
      <Routes>
        <Route path="/" element={<Navigate to="/detail" />} />
        <Route path="/bookkeeping" element={<Bookkeeping />} />
        <Route path="/community" element={<Community />} />
        <Route path="/cateGory" element={<CateGory />}></Route>
        <Route path="/editing/:id" element={<Editing />}></Route>
        <Route path="/community/personal/:id" element={<Personal />} />
        <Route
          path="/community/follow-list/:id/:type"
          element={<FollowList />}
        />
        <Route
          path="/user-info"
          element={
            <LoginGuard>
              <UserInfo />
            </LoginGuard>
          }
        />
        <Route
          path="/password"
          element={
            <LoginGuard>
              <Password />
            </LoginGuard>
          }
        />
        <Route path="/sign" element={<Sign />} />
        <Route path="/mine" element={<Mine />} />
        <Route path="/share" element={<Share />} />
        <Route
          path="/post-topic"
          element={
            <LoginGuard>
              <PostTopic />
            </LoginGuard>
          }
        />
        <Route path="/topic-detail/:id" element={<TopicDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/message" element={<Message />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
export default App;
