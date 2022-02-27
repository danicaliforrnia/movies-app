import { disney, sony, warner } from '../../constants/studio_constants.mjs';

const studiosController = {
    findAll: async () => {
        let disneyTemp = { ...disney };
        delete disneyTemp.movies;
        let warnerTemp = { ...warner };
        delete warnerTemp.movies;
        let sonyTemp = { ...sony };
        delete sonyTemp.movies;
        return [disneyTemp, warnerTemp, sonyTemp];
    }
};

export default studiosController;
