import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../common/Layout';
import { Airplane, Home, Hotels, Tour, OttIntro } from '../pages';
import OttMain from '../pages/ottMain';
import OttDetail from '../components/ottMain/ottDetail/OttDetail';

export const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/hotels" element={<Hotels />} />
                    <Route path="/tour" element={<Tour />} />
                    <Route path="/airplane" element={<Airplane />} />
                    <Route path="/ottIntro" element={<OttIntro />} />
                    <Route path="/ottMain" element={<OttMain />} />
                    {/* <Route path="/ottDetail/:videoId" element={<ProductDetail />} /> */}
                    <Route path="/ottDetail" element={<OttDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
