import Header from './components/Header';
import UserInfo from './components/UserInfo';
import DoctorRecomendationsCard from './components/DoctorRecomendationsCard';
import Footer from './components/Footer';
import MedicalDashboard from './components/MedicalDashboard';

function PacientApp() {
	return (
		<main className="px-12">
			<Header />
			<div className="grid grid-cols-12 gap-4">
				<UserInfo />
				<DoctorRecomendationsCard />
			</div>
			<MedicalDashboard />
			<Footer />
		</main>
	);
}

export default PacientApp;