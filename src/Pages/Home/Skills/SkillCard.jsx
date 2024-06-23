

const SkillCard = ({ skill, img }) => {
    return (
        <div>
            <div className="ml-2 md:ml-8 border border-fuchsia-400 py-4 bg-gray-900 px-7 rounded-lg">
                <img className="w-28 h-28" src={img} alt="" />
                <h2 className="text-xl text-center uppercase">{skill}</h2>
            </div>
        </div>
    );
};

export default SkillCard;