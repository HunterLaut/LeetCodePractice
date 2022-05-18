class Solution(object):
    def intToRoman(self, num):
        """
        :type num: int
        :rtype: str
        """
        s = ''
        temp = math.floor(num/1000)
        temp= int(temp)
        if (temp > 0):
            s += "M" * temp
        num = num%1000
#Enter Hundred
        temp = math.floor(num/100)
        temp= int(temp)
        if (temp > 0):
            if (temp <= 8):
                if (temp > 4):
                    s += "D" + ("C" * (temp-5))
                elif (temp < 4):
                    s += "C" * temp
                else:
                    s+= "CD"
            else:
                s += "CM"
        num = num%100
#Enter Tens         
        temp = math.floor(num/10)
        temp= int(temp)
        if (temp > 0):
            if (temp <= 8):
                if (temp > 4):
                    s += "L" + ("X" * (temp-5))
                elif (temp < 4):
                    s += "X" * temp
                else:
                    s+= "XL"
            else:
                s += "XC"
        num = num%10
        
        if num == 9:
            s += "IX"
        elif num > 4:
            s += "V" + ("I" * (num-5))
        elif num == 4:
            s+= "IV"
        else:
            s += "I" * num
        return s
