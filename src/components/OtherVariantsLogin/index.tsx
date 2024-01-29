import {Button} from '@components/Button';

export const OtherVariantsLogin = () => {
  const handleGoogleAuth = () => {};
  const handleAppleIdAuth = () => {};
  const handleSMSAuth = () => {};

  return (
    <>
      <Button
        variant="outlined"
        label="Continue with Google"
        onPress={handleGoogleAuth}
      />
      <Button
        variant="outlined"
        label="Continue with Apple ID"
        onPress={handleAppleIdAuth}
      />
      <Button
        variant="outlined"
        label="Authorize via SMS"
        onPress={handleSMSAuth}
      />
    </>
  );
};
