import { makeObservable, observable, computed, action, toJS } from "mobx"

export default class {
    constructor() {
        makeObservable(this);
    }

    @observable
    _defaults = null;
    @observable
    _userInfo = null;

    @computed
    get defaults() {
      return toJS(this._defaults);
    }

    @computed
    get userInfo() {
      return toJS(this._userInfo);
    }

    @action
    setDefaults = v => this._defaults = v;

    @action
    setUserInfo = v => this._userInfo = v;

    findDefaults = () => {
        this.setDefaults({
          imgSrc: 'https://firebase.google.com//images/usecases/chat-features_1x.png',
          icon: 'chat',
          header: '연락하여 일정을 조율하세요',
          subHeader: '개인정보 공유는 사생활 노출이 될 수 있습니다.',
        });
      }    

    findMessage = v => {
        this.setUserInfo({
            chatId: '000101',
            type: 'P',
            name: 'Inyestar',
            user: {
                id: 'U001002',
                img: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
                name: 'Inyestar',
            },
            status: [
                'bookmark',
                'bell slash'
            ]
        })
    }
}