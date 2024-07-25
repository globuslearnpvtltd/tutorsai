import Learner from '../../models/learner_model/learner.model.js';


export const findUserByEmail = async (email) => {
    try {
        return await Learner.findOne({ email });
    } catch (error) {
        console.log(error);
    }
};


export const createLearner = async (name,email,mobile = '',password = '')=>{
    try {
        const learner = new Learner({
            name,email,mobile,password
        })
        let newLearner = await learner.save();
        return {newLearner}
    } catch (error) {
        console.log(error);
    }
}