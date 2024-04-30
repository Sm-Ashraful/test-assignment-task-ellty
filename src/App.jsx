import { useEffect, useState } from "react";
import Button from "./components/Button";
import Line from "./components/Line";
import PageContainer from "./components/PageContainer";
import AllPageContainer from "./components/AllPageContainer";

const pageTitles = ["page 1", "page 2", "page 3", "page 4", "page 5", "page 6"];

function App() {
  const [activePages, setActivePages] = useState([]);
  const [selectAllPage, setSelectAllPage] = useState(false);

  const handleAllSelectPage = () => {
    if (activePages.length === pageTitles.length) {
      setActivePages([]);
      setSelectAllPage(false);
    } else {
      setActivePages([...pageTitles]);
      setSelectAllPage(true);
    }
  };

  const handlePageActivation = (pageTitle) => {
    if (activePages.includes(pageTitle)) {
      setActivePages(activePages.filter((page) => page !== pageTitle));
    } else {
      setActivePages([...activePages, pageTitle]);
    }
  };

  useEffect(() => {
    if (activePages.length === pageTitles.length) {
      setSelectAllPage(true);
    }
  }, [activePages]);

  return (
    <section>
      <div className="container">
        <div>
          <AllPageContainer
            title={"all pages"}
            activePages={activePages}
            handleAllSelectPage={handleAllSelectPage}
            selectAllPage={selectAllPage}
          />
        </div>
        <Line />
        <div className="page-container">
          {pageTitles.map((title, i) => (
            <PageContainer
              key={i}
              title={title}
              activePages={activePages}
              handlePageActivation={handlePageActivation}
              selectAllPage={selectAllPage}
            />
          ))}
        </div>
        <Line />
        <div className="btn-container">
          <Button />
        </div>
      </div>
    </section>
  );
}

export default App;
