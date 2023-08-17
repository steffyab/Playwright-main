const {test,  expect} = require('@playwright/test');

test('Validlogin',async({page })=>{

    await page.goto('http://avdqc.interfacesys.com/Account/Login?ReturnUrl=%2fDashboard%2fIndex');

    await page.locator('id = UserName').click()
    await page.locator('id="Password"').click()
    await page.locator('login-btn form-control').click()
    await expect(page).toHaveURL(/Home/);

})