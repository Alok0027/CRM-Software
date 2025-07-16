import React from 'react';

const TermsAndConditions = () => {
  const Section = ({ title, children }) => (
    <section className="mb-12">
      <h2 className="text-3xl font-medium text-gray-800 mb-6">{title}</h2>
      <div className="text-gray-700 space-y-4">
        {children}
      </div>
    </section>
  );

  return (
    <div className="bg-white font-sans">
      <header className="bg-orange-400 text-white py-20 px-10 mt-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-medium mb-4">Terms & Conditions</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
            commodo diam libero vitae erat.
          </p>
        </div>
      </header>

      <main className="py-16 px-10">
        <div className="max-w-4xl mx-auto">
          <Section title="Terms of Service">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus nisi cursus, tempus nulla consectetur, cursus mauris. Proin vitae tellus non elit ultrices mollis. Nullam at viverra velit, eget molestie mi. Duis elementum diam vel egestas efficitur. Proin faucibus quam eu diam molestie vulputate. Mauris eu tempor enim. Proin vulputate eu nibh nec sollicitudin. Donec sed lobortis ligula. Fusce congue metus ac tellus efficitur suscipit. Aenean id nunc et augue sodales dignissim.
            </p>
            <p>
              Ut ac mi nec mauris malesuada suscipit at in nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt faucibus dolor, in elementum metus. Nam mauris urna, ultrices a pharetra ullamcorper, convallis eget neque. Cras eget ligula urna. Vivamus blandit nisi euismod quam vestibulum, ut feugiat orci sagittis. Fusce maximus, est ut varius tempus, augue ligula pulvinar neque, at blandit eros enim et tortor. Aenean in ex nec ante ullamcorper malesuada. Nunc dui nunc, interdum at lobortis sed, rhoncus ac dui. Phasellus nec leo tristique ante suscipit pretium vitae nec felis. Nullam eleifend enim at quam fermentum luctus. Duis scelerisque nisl diam, vitae auctor velit sollicitudin ac. Curabitur commodo lorem arcu, vel scelerisque mauris sollicitudin in.
            </p>
          </Section>

          <Section title="Billing">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus nisi cursus, tempus nulla consectetur, cursus mauris. Proin vitae tellus non elit ultrices mollis. Nullam at viverra velit, eget molestie mi. Duis elementum diam vel egestas efficitur. Proin faucibus quam eu diam molestie vulputate. Mauris eu tempor enim. Proin vulputate eu nibh nec sollicitudin. Donec sed lobortis ligula. Fusce congue metus ac tellus efficitur suscipit. Aenean id nunc et augue sodales dignissim.
            </p>
            <p>
              Ut ac mi nec mauris malesuada suscipit at in nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt faucibus dolor, in elementum metus. Nam mauris urna, ultrices a pharetra ullamcorper, convallis eget neque. Cras eget ligula urna. Vivamus blandit nisi euismod quam vestibulum, ut feugiat orci sagittis. Fusce maximus, est ut varius tempus, augue ligula pulvinar neque, at blandit eros enim et tortor. Aenean in ex nec ante ullamcorper malesuada. Nunc dui nunc, interdum at lobortis sed, rhoncus ac dui. Phasellus nec leo tristique ante suscipit pretium vitae nec felis. Nullam eleifend enim at quam fermentum luctus. Duis scelerisque nisl diam, vitae auctor velit sollicitudin ac. Curabitur commodo lorem arcu, vel scelerisque mauris sollicitudin in.
            </p>
          </Section>

          <Section title="Data Protection">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus nisi cursus, tempus nulla consectetur, cursus mauris. Proin vitae tellus non elit ultrices mollis. Nullam at viverra velit, eget molestie mi. Duis elementum diam vel egestas efficitur. Proin faucibus quam eu diam molestie vulputate. Mauris eu tempor enim. Proin vulputate eu nibh nec sollicitudin. Donec sed lobortis ligula. Fusce congue metus ac tellus efficitur suscipit. Aenean id nunc et augue sodales dignissim.
            </p>
            <p>
              Ut ac mi nec mauris malesuada suscipit at in nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt faucibus dolor, in elementum metus. Nam mauris urna, ultrices a pharetra ullamcorper, convallis eget neque. Cras eget ligula urna. Vivamus blandit nisi euismod quam vestibulum, ut feugiat orci sagittis. Fusce maximus, est ut varius tempus, augue ligula pulvinar neque, at blandit eros enim et tortor. Aenean in ex nec ante ullamcorper malesuada. Nunc dui nunc, interdum at lobortis sed, rhoncus ac dui. Phasellus nec leo tristique ante suscipit pretium vitae nec felis. Nullam eleifend enim at quam fermentum luctus. Duis scelerisque nisl diam, vitae auctor velit sollicitudin ac. Curabitur commodo lorem arcu, vel scelerisque mauris sollicitudin in.
            </p>
          </Section>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditions;
