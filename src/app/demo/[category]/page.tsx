import { notFound } from 'next/navigation';
import { categories } from '@/lib/categories';
import RestaurantElegant from '@/components/demos/RestaurantElegant';
import RestaurantCasual from '@/components/demos/RestaurantCasual';
import AgencyCreative from '@/components/demos/AgencyCreative';
import AgencyCorporate from '@/components/demos/AgencyCorporate';
import EcommerceProduct from '@/components/demos/EcommerceProduct';
import SaasLanding from '@/components/demos/SaasLanding';
import PhotographerPortfolio from '@/components/demos/PhotographerPortfolio';
import FitnessTrainer from '@/components/demos/FitnessTrainer';
import MedicalPractice from '@/components/demos/MedicalPractice';
import RealEstateAgent from '@/components/demos/RealEstateAgent';
import EventPlanning from '@/components/demos/EventPlanning';

const demoComponents: Record<string, React.ComponentType> = {
  'restaurant-elegant': RestaurantElegant,
  'restaurant-casual': RestaurantCasual,
  'agency-creative': AgencyCreative,
  'agency-corporate': AgencyCorporate,
  'ecommerce-product': EcommerceProduct,
  'saas-landing': SaasLanding,
  'photographer-portfolio': PhotographerPortfolio,
  'fitness-trainer': FitnessTrainer,
  'medical-practice': MedicalPractice,
  'real-estate-agent': RealEstateAgent,
  'event-planning': EventPlanning,
};

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.id,
  }));
}

export default async function DemoPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const DemoComponent = demoComponents[category];
  
  if (!DemoComponent) {
    notFound();
  }

  return <DemoComponent />;
}
