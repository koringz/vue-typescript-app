import { Request } from '@/api/index.js'
export default {
    getProjects() {
        return Request({ url: '/index/projects' });
    }
};