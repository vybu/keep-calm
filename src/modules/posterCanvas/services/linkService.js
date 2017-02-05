import shortid from 'shortid';
import getImgUrl from './lib/getImgUrl';
import posterCreator from '../../posterCreator';
import transportAgent from '../../../common/transport';
import overlayModal from '../../overlayModal';

const defaultOptions = {
    width: 500,
    height: 583
};


function saveInDb(id, data) {
    transportAgent.setDataById(id, data)
        .then(({ isSuccessfull = false }) => {
            if (isSuccessfull) {
                console.log(`Showing you modal where url is ${window.location.origin}/s/${id}.jpg`);
                console.log(`Showing you modal where url is ${window.location.origin}/s/${id}`);
            }
        })
        .catch((error) => {
            console.error('something went wrong!', error);
        });
}

export default function(options = defaultOptions, state, dispatch) {
    const id = shortid.generate();
    const posterCreatorState = posterCreator.selectors.getAll(state);
    const formConfig = { ...posterCreator.selectors.getOnlyFormFields(posterCreatorState) };

    getImgUrl({ ...posterCreatorState, ...options }, imageSrc => {
        saveInDb(id, { formConfig, imageSrc });
        dispatch(overlayModal.actions.showOverlayModal(overlayModal.constants.TYPE_SHARE_LINK, { linkValue: `https://keepcalm.top/s/${id}` }));
    });


}
