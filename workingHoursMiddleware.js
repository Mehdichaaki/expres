module.exports = function (req, res, next) {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hourOfDay = now.getHours();

    // Check if it's a weekday (Monday to Friday) and between 9 AM and 5 PM
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay < 17) {
        next(); // Continue with the request
    } else {
        res.status(403).send('Access Denied: The website is only available during working hours (Monday to Friday, 9 AM to 5 PM).');
    }
};
