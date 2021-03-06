import { handlers } from '../src/researchHandler'

jest.setTimeout(30000)

test('datakick lookup 00811102020236', async () => {
  const rst = await handlers.datakickRequest('00811102020236', false)
  // console.log(rst)
  expect(rst).not.toBeNull()
  expect(rst.gtin).toBe('00811102020236')
  expect(rst.image).not.toBeNull()
  expect(rst.gtin_path).not.toBeNull()
});

test('eandata lookup 03045320094084', async () => {
  const rst = await handlers.eanDataRequest('03045320094084', false)
  // console.log(rst)
  expect(rst).not.toBeNull()
  expect(rst.gtin).toBe('03045320094084')
  expect(rst.image).not.toBeNull()
  expect(rst.gtin_path).not.toBeNull()
});

test('itemmaster lookup 00832544000501', async () => {
  const rst = await handlers.itemMasterRequest('00832544000501', false)
  // console.log(rst)
  expect(rst).not.toBeNull()
  expect(rst.gtin).toBe('00832544000501')
  expect(rst.image).not.toBeNull()
  expect(rst.gtin_path).not.toBeNull()
});

test('kwikee lookup 00018200281372', async () => {
  const rst = await handlers.kwikeeRequest('00018200281372', false)
  // console.log(rst)
  expect(rst).not.toBeNull()
  expect(rst.gtin).toBe('00018200281372')
  expect(rst.image).not.toBeNull()
  expect(rst.gtin_path).not.toBeNull()
});

