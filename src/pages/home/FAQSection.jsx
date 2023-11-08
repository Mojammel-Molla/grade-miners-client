const FAQSection = () => {
  return (
    <div className="my-10">
      <h1 className="text-4xl font-bold text-center my-5">FAQ section</h1>
      <div className="flex justify-around w-full">
        <div className="w-1/3">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              What is AssignmentHub, and how does it work?
            </div>
            <div className="collapse-content">
              <p>
                AssignmentHub connects students with assignments, simplifying
                the academic journey.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Is AssignmentHub free to use?
            </div>
            <div className="collapse-content">
              <p>Yes, AssignmentHub is free with optional premium features.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How do I find assignments that match my needs?
            </div>
            <div className="collapse-content">
              <p>
                Search by subject, difficulty, or keywords for a perfect match.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              Can I submit my own assignments to share with others?
            </div>
            <div className="collapse-content">
              <p>Absolutely, sharing your assignments is encouraged.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Are there resources to help me with assignment-related questions?
            </div>
            <div className="collapse-content">
              <p>
                Explore guides and forums for assistance and community support.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What if I have a question or issue with the platform?
            </div>
            <div className="collapse-content">
              <p>Contact our support team for prompt assistance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
