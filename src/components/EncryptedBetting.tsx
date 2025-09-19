import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCreateWager, useDepositFunds } from '@/hooks/useContract';
import { createEncryptedBettingData, encryptBettingAmount } from '@/lib/fhe';
import { Zap, Lock, Shield, Coins } from 'lucide-react';
import { toast } from 'sonner';

interface EncryptedBettingProps {
  vaultId: number;
  onSuccess?: () => void;
}

export const EncryptedBetting: React.FC<EncryptedBettingProps> = ({ vaultId, onSuccess }) => {
  const [amount, setAmount] = useState('');
  const [odds, setOdds] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [isEncrypting, setIsEncrypting] = useState(false);
  const [isDepositing, setIsDepositing] = useState(false);

  const { createWager, isLoading: isCreatingWager } = useCreateWager();
  const { depositFunds, isLoading: isDepositing } = useDepositFunds();

  const handleEncryptedBet = async () => {
    if (!amount || !odds || !description || !deadline) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsEncrypting(true);
    
    try {
      // Create encrypted betting data
      const encryptedData = await createEncryptedBettingData(
        parseFloat(amount),
        parseFloat(odds),
        vaultId,
        description,
        new Date(deadline).getTime() / 1000
      );

      // Create wager with encrypted data
      await createWager({
        args: [
          vaultId,
          description,
          Math.floor(new Date(deadline).getTime() / 1000),
          encryptedData.encryptedAmount,
          encryptedData.encryptedOdds,
          encryptedData.amountProof
        ]
      });

      toast.success('Encrypted bet created successfully!');
      onSuccess?.();
    } catch (error) {
      console.error('Error creating encrypted bet:', error);
      toast.error('Failed to create encrypted bet');
    } finally {
      setIsEncrypting(false);
    }
  };

  const handleDepositFunds = async () => {
    if (!amount) {
      toast.error('Please enter an amount');
      return;
    }

    setIsDepositing(true);
    
    try {
      // Encrypt deposit amount
      const { encryptedAmount, proof } = await encryptBettingAmount(parseFloat(amount));
      
      // Deposit encrypted funds
      await depositFunds({
        args: [encryptedAmount, proof]
      });

      toast.success('Funds deposited with FHE encryption!');
    } catch (error) {
      console.error('Error depositing funds:', error);
      toast.error('Failed to deposit funds');
    } finally {
      setIsDepositing(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lock className="w-5 h-5 text-green-400" />
          <Zap className="w-5 h-5 text-blue-400" />
          FHE Encrypted Betting
        </CardTitle>
        <CardDescription>
          Your betting data is encrypted using Fully Homomorphic Encryption (FHE) 
          and remains private on the blockchain.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Deposit Funds Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Coins className="w-4 h-4 text-yellow-400" />
            <Label className="text-sm font-medium">Deposit Encrypted Funds</Label>
          </div>
          
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="Amount to deposit"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={handleDepositFunds}
              disabled={isDepositing}
              className="bg-green-600 hover:bg-green-700"
            >
              {isDepositing ? 'Encrypting...' : 'Deposit'}
            </Button>
          </div>
        </div>

        {/* Create Bet Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-purple-400" />
            <Label className="text-sm font-medium">Create Encrypted Bet</Label>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bet-amount">Bet Amount</Label>
              <Input
                id="bet-amount"
                type="number"
                placeholder="0.0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="odds">Odds</Label>
              <Input
                id="odds"
                type="number"
                placeholder="1.5"
                value={odds}
                onChange={(e) => setOdds(e.target.value)}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              placeholder="Bet description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="deadline">Deadline</Label>
            <Input
              id="deadline"
              type="datetime-local"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
          
          <Button 
            onClick={handleEncryptedBet}
            disabled={isEncrypting || isCreatingWager}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            {isEncrypting ? 'Encrypting Data...' : 
             isCreatingWager ? 'Creating Bet...' : 
             'Create Encrypted Bet'}
          </Button>
        </div>

        {/* FHE Status */}
        <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-green-400" />
            <span className="text-sm text-gray-300">FHE Encryption Active</span>
          </div>
          <Badge variant="secondary" className="bg-green-900 text-green-300">
            Private
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
