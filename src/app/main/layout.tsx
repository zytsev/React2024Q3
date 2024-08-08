import PagintPopup from '../../components/pagelayout/PagintPopup';
import Container from '../../components/pagelayout/Container';
import ListCard from '../../../app/components/listcard/ListCard';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <div className="main-container">
        <ListCard />
        {children}
      </div>
      <PagintPopup />
    </Container>
  );
}
