

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center w-7/12 md:w-6/12 my-8">
            <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;