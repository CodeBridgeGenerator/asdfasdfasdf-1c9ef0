
import { faker } from "@faker-js/faker";
export default (user,count,branchIdIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
name: faker.lorem.sentence(""),
sku: faker.lorem.sentence(""),
branchId: branchIdIds[i % branchIdIds.length],

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
